import subprocess

html_content = '''<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background-color: #F7F8F4;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #26332E;
    overflow-x: hidden;
  }
  .divider-wrap {
    width: 100%;
    overflow: hidden;
    padding: 0;
  }
  .divider-svg {
    width: 100%;
    height: 28px;
    display: block;
  }
  .hero-right {
    position: relative;
    width: 680px;
    height: 600px;
    margin: 40px auto;
  }
  /* Soft fading architectural diagonal strip */
  .facet-diagonal {
    position: absolute;
    top: 10px;
    left: 40px;
    width: 140px;
    height: 480px;
    background: linear-gradient(170deg, #E2E6DC 0%, #D8DDD1 50%, rgba(216,221,209,0) 90%);
    clip-path: polygon(50% 0, 100% 0, 45% 100%, 0% 100%);
    -webkit-mask-image: linear-gradient(to bottom, #000 40%, rgba(0,0,0,0.6) 70%, transparent 95%);
    mask-image: linear-gradient(to bottom, #000 40%, rgba(0,0,0,0.6) 70%, transparent 95%);
    z-index: 1;
    pointer-events: none;
  }
  .facet-tr {
    position: absolute;
    top: -10px;
    right: 0;
    width: 320px;
    height: 280px;
    background: linear-gradient(135deg, #ECEFE8 0%, rgba(236,239,232,0) 80%);
    clip-path: polygon(100% 0, 32% 0, 100% 78%);
    z-index: 1;
    pointer-events: none;
  }
  .img-box {
    position: absolute;
    top: 0;
    right: 0;
    width: 620px;
    height: 560px;
    z-index: 2;
  }
  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 72% 30%;
    /* Progressive multi-directional blend: soft fade on diagonal, soft fade on bottom, soft fade on left */
    -webkit-mask-image: 
      linear-gradient(145deg, transparent 0%, transparent 10%, rgba(0,0,0,0.3) 18%, rgba(0,0,0,0.85) 28%, #000 38%),
      linear-gradient(to bottom, #000 50%, rgba(0,0,0,0.7) 72%, transparent 95%),
      linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, #000 24%);
    mask-image: 
      linear-gradient(145deg, transparent 0%, transparent 10%, rgba(0,0,0,0.3) 18%, rgba(0,0,0,0.85) 28%, #000 38%),
      linear-gradient(to bottom, #000 50%, rgba(0,0,0,0.7) 72%, transparent 95%),
      linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, #000 24%);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
  }
</style>
</head>
<body>
  <div class="divider-wrap">
    <svg class="divider-svg" viewBox="0 0 1440 32" fill="none" preserveAspectRatio="none">
      <polyline points="0,18 155,18 281,18 318,18 339,17 416,10 488,12 572,11 652,18 696,18 820,18 899,9 986,14 1070,15 1138,11 1212,18 1392,18 1440,18" stroke="#123F32" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="155" cy="18" r="3.6" fill="#123F32" />
      <circle cx="281" cy="18" r="3.6" fill="#123F32" />
      <circle cx="318" cy="18" r="3.4" fill="#123F32" />
      <circle cx="339" cy="17" r="3.4" fill="#123F32" />
      <circle cx="488" cy="12" r="3.6" fill="#123F32" />
      <circle cx="572" cy="11" r="3.6" fill="#123F32" />
      <circle cx="652" cy="18" r="3.6" fill="#123F32" />
      <circle cx="696" cy="18" r="3.4" fill="#123F32" />
      <circle cx="820" cy="18" r="3.6" fill="#123F32" />
      <circle cx="986" cy="14" r="3.6" fill="#123F32" />
      <circle cx="1070" cy="15" r="3.6" fill="#123F32" />
      <circle cx="1212" cy="18" r="3.6" fill="#123F32" />
      <circle cx="1392" cy="18" r="3.6" fill="#123F32" />
      <!-- Rich Gold Accent Nodes matching Image 3 #CF9D42 - Full unclipped circles -->
      <circle cx="416" cy="10" r="5.2" fill="#CF9D42" stroke="#123F32" stroke-width="1" />
      <circle cx="899" cy="9" r="5.5" fill="#CF9D42" stroke="#123F32" stroke-width="1" />
      <circle cx="1138" cy="11" r="5.2" fill="#CF9D42" stroke="#123F32" stroke-width="1" />
    </svg>
  </div>

  <div class="hero-right">
    <div class="facet-tr"></div>
    <div class="facet-diagonal"></div>
    <div class="img-box">
      <img class="hero-img" src="file:///C:/Users/sanja/OneDrive/Documents/GitHub/SPS-PVT-LTD/public/images/hero-lab.jpg" />
    </div>
  </div>
</body>
</html>'''

with open('test_fix.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
cmd = [chrome_path, '--headless=new', '--window-size=1440,750', '--screenshot=C:\\Users\\sanja\\OneDrive\\Documents\\GitHub\\SPS-PVT-LTD\\test_fix.png', 'file:///C:/Users/sanja/OneDrive/Documents/GitHub/SPS-PVT-LTD/test_fix.html']
try:
    subprocess.run(cmd, timeout=8)
    print('Rendered test_fix.png successfully')
except Exception as e:
    print('Error:', e)
