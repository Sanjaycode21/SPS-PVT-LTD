import subprocess

html_content = '''<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background-color: #F7F8F4;
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #26332E;
    overflow-x: hidden;
  }
  .header-wrap {
    background: #F7F8F4;
    width: 100%;
    padding: 10px 48px 0px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .logo-img {
    height: 60px;
    object-fit: contain;
  }
  .nav-items {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  .nav-item {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #26332E;
    position: relative;
    padding-bottom: 4px;
  }
  .nav-item.active {
    color: #123F32;
  }
  .nav-item.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #C5A65A;
  }
  .contact-btn {
    background: #123F32;
    color: white;
    padding: 8px 20px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .divider-wrap {
    width: 100%;
    margin-top: 1px;
    overflow: hidden;
  }
  .divider-svg {
    width: 100%;
    height: 20px;
    display: block;
  }
  .hero-section {
    position: relative;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 24px 48px 48px 48px;
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: 32px;
    align-items: center;
    min-height: 560px;
  }
  .hero-left {
    z-index: 10;
  }
  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #C5A65A;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
  .eyebrow-line {
    width: 24px;
    height: 2px;
    background: #C5A65A;
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
    max-width: 520px;
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
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: none;
    cursor: pointer;
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
    cursor: pointer;
  }
  .hero-right {
    position: relative;
    width: 100%;
    height: 520px;
  }
  .facet-tr {
    position: absolute;
    top: -15px;
    right: -48px;
    width: 320px;
    height: 260px;
    background: #ECEFE8;
    clip-path: polygon(100% 0, 35% 0, 100% 75%);
    z-index: 1;
    pointer-events: none;
  }
  .facet-br {
    position: absolute;
    bottom: -30px;
    right: -48px;
    width: 280px;
    height: 220px;
    background: #E8EBE2;
    clip-path: polygon(100% 40%, 45% 100%, 100% 100%);
    z-index: 1;
    pointer-events: none;
  }
  .facet-diagonal {
    position: absolute;
    top: 20px;
    left: 45px;
    width: 110px;
    height: 310px;
    background: #E2E6DC;
    clip-path: polygon(55% 0, 100% 0, 45% 100%, 0% 100%);
    z-index: 2;
    pointer-events: none;
  }
  .img-box {
    position: absolute;
    top: 0;
    right: 0;
    width: 580px;
    height: 520px;
    z-index: 3;
    clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 48%);
  }
  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 72% 30%;
    -webkit-mask-image: radial-gradient(ellipse 90% 80% at 75% 25%, #000 32%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.3) 72%, transparent 95%), linear-gradient(to bottom, #000 55%, transparent 96%);
    mask-image: radial-gradient(ellipse 90% 80% at 75% 25%, #000 32%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.3) 72%, transparent 95%), linear-gradient(to bottom, #000 55%, transparent 96%);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
  }
</style>
</head>
<body>
  <div class="header-wrap">
    <img class="logo-img" src="file:///C:/Users/sanja/OneDrive/Documents/GitHub/SPS-PVT-LTD/public/images/sps-logo.png" />
    <div class="nav-items">
      <div class="nav-item active">Home</div>
      <div class="nav-item">Products</div>
      <div class="nav-item">Services</div>
      <div class="contact-btn">Contact Us <span>↗</span></div>
    </div>
  </div>

  <div class="divider-wrap">
    <svg class="divider-svg" viewBox="0 0 1440 22" fill="none" preserveAspectRatio="none">
      <polyline points="0,12 155,12 281,12 318,12 339,11 416,4 488,6 572,5 652,12 696,12 820,12 899,2 986,8 1070,9 1138,6 1212,12 1392,12 1440,12" stroke="#123F32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="155" cy="12" r="3.2" fill="#123F32" />
      <circle cx="281" cy="12" r="3.2" fill="#123F32" />
      <circle cx="318" cy="12" r="3" fill="#123F32" />
      <circle cx="339" cy="11" r="3" fill="#123F32" />
      <circle cx="488" cy="6" r="3.2" fill="#123F32" />
      <circle cx="572" cy="5" r="3.2" fill="#123F32" />
      <circle cx="652" cy="12" r="3.2" fill="#123F32" />
      <circle cx="696" cy="12" r="3.2" fill="#123F32" />
      <circle cx="820" cy="12" r="3.2" fill="#123F32" />
      <circle cx="986" cy="8" r="3.2" fill="#123F32" />
      <circle cx="1070" cy="9" r="3.2" fill="#123F32" />
      <circle cx="1212" cy="12" r="3.2" fill="#123F32" />
      <circle cx="1392" cy="12" r="3.2" fill="#123F32" />
      <circle cx="416" cy="4" r="4.2" fill="#D49A36" stroke="#123F32" stroke-width="0.8" />
      <circle cx="899" cy="2" r="4.5" fill="#D49A36" stroke="#123F32" stroke-width="0.8" />
      <circle cx="1138" cy="6" r="4.2" fill="#D49A36" stroke="#123F32" stroke-width="0.8" />
    </svg>
  </div>

  <section class="hero-section">
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

    <div class="hero-right">
      <div class="facet-tr"></div>
      <div class="facet-br"></div>
      <div class="facet-diagonal"></div>
      <div class="img-box">
        <img class="hero-img" src="file:///C:/Users/sanja/OneDrive/Documents/GitHub/SPS-PVT-LTD/public/images/hero-lab.jpg" />
      </div>
    </div>
  </section>
</body>
</html>'''

with open('test_composition.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
cmd = [chrome_path, '--headless=new', '--window-size=1440,750', '--screenshot=C:/Users/sanja/OneDrive/Documents/GitHub/SPS-PVT-LTD/test_composition.png', 'file:///C:/Users/sanja/OneDrive/Documents/GitHub/SPS-PVT-LTD/test_composition.html']
subprocess.run(cmd, timeout=8)
print('Rendered test_composition.png successfully!')
