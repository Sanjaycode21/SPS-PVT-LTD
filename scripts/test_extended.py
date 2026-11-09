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
    height: 720px;
    background-color: #F7F8F4;
    overflow: hidden;
    padding: 0 48px;
    display: flex;
    align-items: center;
  }
  .hero-left {
    width: 580px;
    z-index: 10;
  }
  .eyebrow {
    color: #CF9D42;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .eyebrow-line {
    width: 24px;
    height: 2px;
    background: #CF9D42;
  }
  .headline {
    font-size: 64px;
    font-weight: 800;
    color: #123F32;
    line-height: 1.08;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
  }
  .headline .italic-part {
    font-weight: 400;
    font-style: italic;
    color: #164431;
    display: block;
    margin-top: 4px;
  }
  .description {
    font-size: 17px;
    color: rgba(38, 51, 46, 0.8);
    line-height: 1.6;
    max-width: 500px;
    margin-bottom: 36px;
  }
  .cta-group {
    display: flex;
    gap: 16px;
  }
  .btn-primary {
    background: #123F32;
    color: white;
    padding: 14px 28px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: none;
  }
  .btn-secondary {
    background: transparent;
    border: 1px solid rgba(18, 63, 50, 0.4);
    color: #123F32;
    padding: 14px 28px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  /* Extended image wrapper extending to the left into the middle of the hero */
  .hero-right-wrap {
    position: absolute;
    top: 30px;
    right: 0;
    width: 920px;
    height: 660px;
    z-index: 5;
  }
  .facet-tr {
    position: absolute;
    top: -20px;
    right: 0;
    width: 340px;
    height: 300px;
    background: linear-gradient(135deg, #ECEFE8 0%, rgba(236,239,232,0.4) 60%, rgba(236,239,232,0) 85%);
    clip-path: polygon(100% 0, 32% 0, 100% 78%);
    z-index: 1;
    pointer-events: none;
  }
  .facet-br {
    position: absolute;
    bottom: -20px;
    right: 0;
    width: 300px;
    height: 240px;
    background: linear-gradient(225deg, #E8EBE2 0%, rgba(232,235,226,0.3) 60%, rgba(232,235,226,0) 85%);
    clip-path: polygon(100% 40%, 45% 100%, 100% 100%);
    z-index: 1;
    pointer-events: none;
  }
  .facet-diagonal {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(165deg, #E2E6DC 0%, #D8DDD1 50%, rgba(216,221,209,0) 90%);
    clip-path: polygon(26% 0%, 33% 0%, 9% 100%, 2% 100%);
    -webkit-mask-image: linear-gradient(to bottom, #000 40%, rgba(0,0,0,0.6) 70%, transparent 95%);
    mask-image: linear-gradient(to bottom, #000 40%, rgba(0,0,0,0.6) 70%, transparent 95%);
    z-index: 2;
    pointer-events: none;
  }
  .img-box {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    clip-path: polygon(32% 0%, 100% 0%, 100% 100%, 2% 100%);
  }
  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 72% 30%;
    /* EXTENDED, LONGER HORIZONTAL FADE COVERING THE EMPTY MIDDLE SPACE */
    -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 6%, rgba(0,0,0,0.08) 16%, rgba(0,0,0,0.25) 28%, rgba(0,0,0,0.55) 44%, rgba(0,0,0,0.85) 62%, #000 80%, #000 100%);
    mask-image: linear-gradient(to right, transparent 0%, transparent 6%, rgba(0,0,0,0.08) 16%, rgba(0,0,0,0.25) 28%, rgba(0,0,0,0.55) 44%, rgba(0,0,0,0.85) 62%, #000 80%, #000 100%);
  }
</style>
</head>
<body>
  <div class="hero-container">
    <div class="hero-left">
      <div class="eyebrow">
        <div class="eyebrow-line"></div>
        <span>Pharmaceutical Research &amp; Development</span>
      </div>
      <h1 class="headline">
        Advancing<br>Chemistry.<br>
        <span class="italic-part">Enabling Better<br>Healthcare.</span>
      </h1>
      <p class="description">
        Research-driven development, API intermediates, and manufacturing solutions for a healthier future.
      </p>
      <div class="cta-group">
        <button class="btn-primary">Explore Our Capabilities ↗</button>
        <button class="btn-secondary">View 100+ Intermediates</button>
      </div>
    </div>

    <div class="hero-right-wrap">
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

with open('test_extended.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
cmd = [chrome_path, '--headless=new', '--window-size=1440,750', '--screenshot=C:\\Users\\sanja\\OneDrive\\Documents\\GitHub\\SPS-PVT-LTD\\test_extended.png', 'file:///C:/Users/sanja/OneDrive/Documents/GitHub/SPS-PVT-LTD/test_extended.html']
try:
    subprocess.run(cmd, timeout=8)
    print('Rendered test_extended.png successfully')
except Exception as e:
    print('Error:', e)
