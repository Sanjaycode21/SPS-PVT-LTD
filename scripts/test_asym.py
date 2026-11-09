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
  .hero-container {
    position: relative;
    width: 1440px;
    height: 700px;
    background-color: #F7F8F4;
    overflow: hidden;
    padding: 0 48px;
    display: flex;
    align-items: center;
  }
  .hero-right {
    position: absolute;
    top: 30px;
    right: 0;
    width: 820px;
    height: 640px;
  }
  /* Top-right subtle facet */
  .facet-tr {
    position: absolute;
    top: -20px;
    right: 0;
    width: 320px;
    height: 280px;
    background: #ECEFE8;
    clip-path: polygon(100% 0, 35% 0, 100% 75%);
    z-index: 1;
    pointer-events: none;
  }
  /* Bottom-right subtle facet */
  .facet-br {
    position: absolute;
    bottom: -20px;
    right: 0;
    width: 280px;
    height: 220px;
    background: #E8EBE2;
    clip-path: polygon(100% 40%, 45% 100%, 100% 100%);
    z-index: 1;
    pointer-events: none;
  }
  /* Architectural diagonal strip parallel to the pronounced diagonal cut */
  .facet-diagonal {
    position: absolute;
    top: 0;
    left: 0;
    width: 820px;
    height: 640px;
    background: linear-gradient(165deg, #E2E6DC 0%, #D8DDD1 50%, rgba(216,221,209,0) 90%);
    clip-path: polygon(23% 0%, 31% 0%, 8% 100%, 0% 100%);
    -webkit-mask-image: linear-gradient(to bottom, #000 40%, rgba(0,0,0,0.6) 70%, transparent 95%);
    mask-image: linear-gradient(to bottom, #000 40%, rgba(0,0,0,0.6) 70%, transparent 95%);
    z-index: 2;
    pointer-events: none;
  }
  /* Image wrapper with strong diagonal geometry */
  .img-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 70% 30%;
    /* PURE DIRECTIONAL HORIZONTAL BLEND - NO VERTICAL FADE */
    -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 10%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.65) 36%, rgba(0,0,0,0.92) 54%, #000 70%, #000 100%);
    mask-image: linear-gradient(to right, transparent 0%, transparent 10%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.65) 36%, rgba(0,0,0,0.92) 54%, #000 70%, #000 100%);
  }
</style>
</head>
<body>
  <div class="hero-container">
    <div class="hero-right">
      <div class="facet-tr"></div>
      <div class="facet-br"></div>
      <div class="facet-diagonal"></div>
      <div class="img-box">
        <img class="hero-img" src="file:///C:/Users/sanja/OneDrive/Documents/GitHub/SPS-PVT-LTD/public/images/hero-lab.jpg" />
      </div>
    </div>
  </div>
</body>
</html>'''

with open('test_asym.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
cmd = [chrome_path, '--headless=new', '--window-size=1440,700', '--screenshot=C:\\Users\\sanja\\OneDrive\\Documents\\GitHub\\SPS-PVT-LTD\\test_asym.png', 'file:///C:/Users/sanja/OneDrive/Documents/GitHub/SPS-PVT-LTD/test_asym.html']
try:
    subprocess.run(cmd, timeout=8)
    print('Rendered test_asym.png successfully')
except Exception as e:
    print('Error:', e)
