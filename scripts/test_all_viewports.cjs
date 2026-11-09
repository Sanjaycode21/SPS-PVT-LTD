const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const viewports = [
  { name: '360px_mobile', width: 360, height: 740, mobile: true },
  { name: '390px_mobile', width: 390, height: 844, mobile: true },
  { name: '430px_mobile', width: 430, height: 932, mobile: true },
  { name: '768px_tablet_portrait', width: 768, height: 1024, mobile: false },
  { name: '1024px_tablet_landscape', width: 1024, height: 768, mobile: false },
  { name: '1366px_laptop', width: 1366, height: 768, mobile: false },
  { name: '1440px_desktop', width: 1440, height: 900, mobile: false },
  { name: '1920px_desktop', width: 1920, height: 1080, mobile: false }
];

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9222',
  'http://localhost:4173/#home'
]);

setTimeout(() => {
  http.get('http://127.0.0.1:9222/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      const tabs = JSON.parse(data);
      const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
      const wsUrl = pageTab.webSocketDebuggerUrl;
      const ws = new WebSocket(wsUrl);

      let step = 0;
      let vpIndex = 0;

      function sendNext() {
        if (vpIndex >= viewports.length) {
          console.log('ALL VIEWPORTS VALIDATED SUCCESSFULLY');
          ws.close();
          chrome.kill();
          process.exit(0);
          return;
        }

        const vp = viewports[vpIndex];
        step = 1;
        ws.send(JSON.stringify({
          id: vpIndex * 10 + 1,
          method: 'Emulation.setDeviceMetricsOverride',
          params: {
            width: vp.width,
            height: vp.height,
            deviceScaleFactor: 1,
            mobile: vp.mobile
          }
        }));
      }

      ws.onopen = () => {
        sendNext();
      };

      ws.onmessage = (msg) => {
        const parsed = JSON.parse(msg.data);
        const currentVp = viewports[vpIndex];
        const id = parsed.id;

        if (id === vpIndex * 10 + 1) {
          // Check DOM
          ws.send(JSON.stringify({
            id: vpIndex * 10 + 2,
            method: 'Runtime.evaluate',
            params: {
              expression: `(() => {
                const w = window.innerWidth;
                const bad = [];
                document.querySelectorAll('*').forEach(el => {
                  const r = el.getBoundingClientRect();
                  if (r.right > w + 2) {
                    bad.push({
                      tag: el.tagName,
                      cls: (el.className || '').toString().slice(0, 40),
                      right: Math.round(r.right),
                      width: Math.round(r.width)
                    });
                  }
                });
                return JSON.stringify({ innerWidth: w, scrollWidth: document.documentElement.scrollWidth, bad: bad.slice(0, 10) });
              })()`,
              returnByValue: true
            }
          }));
        } else if (id === vpIndex * 10 + 2) {
          const domRes = JSON.parse(parsed.result.result.value);
          console.log(`Viewport ${currentVp.name} (${currentVp.width}x${currentVp.height}): scrollWidth=${domRes.scrollWidth}, badElements=${domRes.bad.length}`);
          if (domRes.bad.length > 0) {
            console.log('  Bad elements:', domRes.bad);
          }
          // Screenshot
          ws.send(JSON.stringify({
            id: vpIndex * 10 + 3,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          }));
        } else if (id === vpIndex * 10 + 3) {
          fs.writeFileSync(`screen_${currentVp.name}.png`, Buffer.from(parsed.result.data, 'base64'));
          vpIndex++;
          sendNext();
        }
      };
    });
  }).on('error', err => {
    console.log('HTTP error:', err.message);
    chrome.kill();
    process.exit(1);
  });
}, 2500);
