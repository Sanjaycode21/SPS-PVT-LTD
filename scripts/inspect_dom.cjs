const { spawn } = require('child_process');
const http = require('http');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--window-size=390,844',
  'http://localhost:4173/#home'
]);

setTimeout(() => {
  http.get('http://127.0.0.1:9222/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const tabs = JSON.parse(data);
      const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
      const wsUrl = pageTab.webSocketDebuggerUrl;
      const ws = new WebSocket(wsUrl);
      ws.onopen = () => {
        // First set mobile emulation width 390
        ws.send(JSON.stringify({
          id: 1,
          method: 'Emulation.setDeviceMetricsOverride',
          params: {
            width: 390,
            height: 844,
            deviceScaleFactor: 2,
            mobile: true
          }
        }));
      };
      ws.onmessage = (msg) => {
        const parsed = JSON.parse(msg.data);
        if (parsed.id === 1) {
          // Now evaluate
          ws.send(JSON.stringify({
            id: 2,
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
                return JSON.stringify({ innerWidth: w, scrollWidth: document.documentElement.scrollWidth, bad: bad.slice(0, 15) });
              })()`,
              returnByValue: true
            }
          }));
        } else if (parsed.id === 2) {
          console.log('EMULATED 390px RESULT:', parsed.result.result.value);
          // Take screenshot at 390px
          ws.send(JSON.stringify({
            id: 3,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          }));
        } else if (parsed.id === 3) {
          const fs = require('fs');
          fs.writeFileSync('mobile_emulated_390.png', Buffer.from(parsed.result.data, 'base64'));
          console.log('Saved mobile_emulated_390.png');
          ws.close();
          chrome.kill();
          process.exit(0);
        }
      };
    });
  }).on('error', err => {
    console.log('HTTP error:', err.message);
    chrome.kill();
    process.exit(1);
  });
}, 2500);
