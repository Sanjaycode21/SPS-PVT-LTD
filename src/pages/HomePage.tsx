import React from 'react';
import { PageId } from '../types';
import { companyData } from '../data/companyData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ========================================================
          HERO SECTION (Editorial Asymmetrical Composition)
          - Original Lab Hero Image and Original Geometric Layout
          - Advancing Chemistry. Enabling Better Healthcare.
          - Rectangular CTA with diagonal arrow ↗
          ======================================================== */}
      {/* ========================================================
          HERO SECTION (Editorial Asymmetrical Composition)
          - Advancing Chemistry. Enabling Better Healthcare.
          - Asymmetrical angled lab photography with progressive blend into #F7F8F4
          - Sharp architectural geometric facets
          - Rectangular CTAs with diagonal arrow ↗
          ======================================================== */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 border-b border-[#123F32]/10 overflow-hidden bg-[#F7F8F4]">
        {/* Subtle background technical grid line */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] editorial-grid-line" aria-hidden="true" />

        <div className="max-w-[1440px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Content Area (6 columns on 12-col grid) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7 lg:pr-4 z-10">
              
              {/* Eyebrow in Rich Gold / Amber matching Image 3 #CF9D42 */}
              <div className="flex items-center space-x-2.5">
                <span className="w-6 h-[2px] bg-[#CF9D42] flex-shrink-0" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs lg:text-sm font-bold tracking-widest uppercase text-[#CF9D42]">
                  PHARMACEUTICAL RESEARCH &amp; DEVELOPMENT
                </span>
              </div>

              {/* Oversized Staggered Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tightest text-[#123F32] leading-[1.08]">
                <span className="block">Advancing</span>
                <span className="block text-[#123F32]">Chemistry.</span>
                <span className="block text-[#164431] font-normal italic mt-1 sm:mt-2">
                  Enabling Better
                </span>
                <span className="block text-[#164431] font-normal italic">
                  Healthcare.
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-[#26332E]/80 max-w-xl leading-relaxed font-normal">
                Research-driven development, API intermediates,<br className="hidden sm:inline" />
                and manufacturing solutions for a healthier future.
              </p>

              {/* Primary Rectangular CTA with Diagonal Arrow ↗ */}
              <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-7 py-3.5 bg-[#123F32] text-white font-sans text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#164431] hover:shadow-[0_8px_20px_rgba(18,63,50,0.18)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CF9D42] flex items-center justify-center space-x-2"
                >
                  <span>EXPLORE OUR CAPABILITIES</span>
                  <span className="text-sm font-normal">↗</span>
                </button>

                <button
                  onClick={() => onNavigate('products')}
                  className="px-7 py-3.5 bg-transparent border border-[#123F32]/40 text-[#123F32] font-sans text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#123F32] hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#123F32] text-center"
                >
                  VIEW 100+ INTERMEDIATES
                </button>
              </div>

              {/* Restrained Technical Metric Strip */}
              <div className="pt-6 sm:pt-8 border-t border-[#123F32]/10 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold text-[#123F32]">100+</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#26332E]/60 pt-1 leading-snug">Documented Molecules</div>
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold text-[#123F32]">2</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#26332E]/60 pt-1 leading-snug">Hyderabad Facilities</div>
                </div>
                <div>
                  <div className="text-xl sm:text-3xl font-extrabold text-[#CF9D42]">QbD</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#26332E]/60 pt-1 leading-snug">Quality by Design</div>
                </div>
              </div>

            </div>

            {/* Right Visual Composition: Extended to the left with longer horizontal fade covering middle space */}
            <div className="lg:col-span-6 xl:col-span-6 relative mt-4 lg:mt-0 w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-full lg:-ml-24 xl:-ml-36 lg:w-[calc(100%+6rem)] xl:w-[calc(100%+9rem)] h-[360px] sm:h-[480px] lg:h-[600px] xl:h-[660px] flex items-center justify-end">
                
                {/* Background Architectural Facet: Top Right Corner Shard */}
                <div 
                  className="absolute -top-4 -right-6 sm:-top-6 sm:-right-8 w-[50%] h-[50%] pointer-events-none z-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(234, 238, 230, 0.75) 0%, rgba(234, 238, 230, 0.25) 60%, transparent 85%)',
                    clipPath: 'polygon(100% 0, 32% 0, 100% 78%)'
                  }}
                  aria-hidden="true"
                />

                {/* Background Architectural Facet: Bottom Right Shard */}
                <div 
                  className="absolute -bottom-4 -right-6 sm:-bottom-6 sm:-right-8 w-[40%] h-[40%] pointer-events-none z-0"
                  style={{
                    background: 'linear-gradient(225deg, rgba(232, 236, 228, 0.65) 0%, rgba(232, 236, 228, 0.2) 60%, transparent 85%)',
                    clipPath: 'polygon(100% 40%, 45% 100%, 100% 100%)'
                  }}
                  aria-hidden="true"
                />

                {/* Hero Laboratory Image: Seamless edge blending into page background #F7F8F4 */}
                <div 
                  className="relative z-20 w-full h-full overflow-hidden"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 15%, #000 35%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 15%, #000 35%)',
                  }}
                >
                  <img
                    src="/images/hero-lab.jpg"
                    alt="Advancing chemistry at SPS - Authentic synthesis laboratory equipment and chemical glassware"
                    className="w-full h-full object-cover object-[66%_30%] select-none transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          1. WHO WE ARE (Company Introduction)
          - Spacious, editorial presentation with natural vertical flow
          - Authentic pharmaceutical research photograph placed asymmetrically
          ======================================================== */}
      <section id="who-we-are" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white border-b border-[#123F32]/10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
            
            {/* Text Content: Generous width, prominent headline, well-spaced copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center space-x-3">
                <span className="w-8 h-[2px] bg-[#CF9D42]" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#CF9D42]">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123F32] tracking-tight leading-[1.15]">
                Paving the way to affordable healthcare through scientific precision.
              </h2>

              <p className="text-base sm:text-lg text-[#26332E]/90 leading-relaxed font-normal">
                {companyData.shortDescription}
              </p>

              <p className="text-sm sm:text-base text-[#26332E]/75 leading-relaxed font-normal">
                {companyData.detailedDescription}
              </p>

              {/* Restrained Architectural Attribute Strip */}
              <div className="pt-6 sm:pt-8 border-t border-[#123F32]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#CF9D42]">Inception</div>
                  <div className="text-sm font-semibold text-[#123F32] mt-1">2026 • Hyderabad</div>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#CF9D42]">Core Domain</div>
                  <div className="text-sm font-semibold text-[#123F32] mt-1">Process R&amp;D &amp; Intermediates</div>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#CF9D42]">Global Reach</div>
                  <div className="text-sm font-semibold text-[#123F32] mt-1">International Partnerships</div>
                </div>
              </div>
            </div>

            {/* Asymmetrical Photographic Composition (5 cols) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Offset architectural backing accent in warm tone */}
              <div 
                className="absolute -bottom-5 -right-5 sm:-bottom-8 sm:-right-8 w-full h-full bg-[#F4F6F0] border border-[#123F32]/10 pointer-events-none -z-10 hidden sm:block"
                aria-hidden="true" 
              />
              
              {/* Sharp rectangular photo frame */}
              <div className="relative border border-[#123F32]/15 shadow-[0_16px_45px_rgba(18,63,50,0.08)] bg-[#F7F8F4] overflow-hidden">
                <img
                  src="/images/service-rsm.jpg"
                  alt="Pharmaceutical research and process development at Shital Prathiksha Sciences"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover object-center select-none"
                />
                
                {/* Editorial Caption Bar */}
                <div className="bg-[#123F32] text-white px-5 sm:px-6 py-3.5 flex items-center justify-between text-xs tracking-wider uppercase font-semibold">
                  <span className="text-white/85">Process Chemistry &amp; Scale-Up</span>
                  <span className="text-[#CF9D42] font-mono">IDA Cherlapally</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. VISION & MISSION: SIDE-BY-SIDE COMPOSITION
          - Shared horizontal composition on desktop with distinct identities
          - Left: Deep forest green with white typography & gold accents
          - Right: Warm pale-sage/off-white with forest green typography
          - Sharp rectangular geometry, no rounded corners, no cards
          ======================================================== */}
      <section id="vision-mission" className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#F7F8F4] border-b border-[#123F32]/10">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Section Lead */}
          <div className="mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#CF9D42] block mb-3">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123F32] tracking-tight">
              Purpose-Driven Scientific Foundations
            </h2>
          </div>

          {/* Two Separate Standalone Boxes: Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            
            {/* BOX 1: OUR VISION (Deep Forest Green, White Typography, Gold Accents) */}
            <div className="bg-[#123F32] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between border border-[#123F32] shadow-[0_16px_40px_rgba(18,63,50,0.12)] relative overflow-hidden">
              {/* Subtle architectural background corner line */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#CF9D42]/20 pointer-events-none" 
                aria-hidden="true" 
              />

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <span className="w-6 h-[2px] bg-[#CF9D42]" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#CF9D42]">
                    OUR VISION
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-8">
                  Paving the Way to Global Health &amp; Discovery
                </h3>

                <blockquote className="border-l-2 border-[#CF9D42] pl-6 sm:pl-8 my-6">
                  <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed font-light italic">
                    "{companyData.vision}"
                  </p>
                </blockquote>
              </div>

              <div className="pt-8 sm:pt-12 mt-8 border-t border-white/15 flex items-center justify-between text-xs tracking-widest uppercase text-white/50">
                <span>Global Healthcare Horizon</span>
                <span className="text-[#CF9D42] font-semibold">Shital Prathiksha Sciences</span>
              </div>
            </div>

            {/* BOX 2: OUR MISSION (Warm Pale-Sage / Off-White, Forest Green Typography) */}
            <div className="bg-[#F2F5ED] text-[#123F32] p-8 sm:p-12 lg:p-16 flex flex-col justify-between border border-[#123F32]/20 shadow-[0_16px_40px_rgba(18,63,50,0.06)] relative overflow-hidden">
              {/* Subtle architectural accent */}
              <div 
                className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#123F32]/10 pointer-events-none" 
                aria-hidden="true" 
              />

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <span className="w-6 h-[2px] bg-[#123F32]" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#123F32]/70">
                    OUR MISSION
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123F32] tracking-tight leading-snug mb-8">
                  Safe, Affordable &amp; Accessible Therapeutics
                </h3>

                {/* Distinct inset panel for mission copy creating subtle internal asymmetry */}
                <div className="bg-white p-6 sm:p-8 border-t-2 border-[#123F32] shadow-[0_4px_20px_rgba(18,63,50,0.04)] my-6">
                  <p className="text-[#123F32] text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                    "{companyData.mission}"
                  </p>
                </div>
              </div>

              <div className="pt-8 sm:pt-12 mt-8 border-t border-[#123F32]/15 flex items-center justify-between text-xs tracking-widest uppercase text-[#26332E]/60">
                <span>Operational Mandate</span>
                <span className="text-[#123F32] font-semibold">Scientific Quality</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          3. CORE VALUES (Spacious Full-Width Editorial Treatment)
          - Separate section immediately below Vision & Mission
          - Headline: Customer Satisfaction. Quality. Timely Development.
          - Architectural 3-column breakdown with thin separators
          - Avoids conventional cards, relies on generous whitespace
          ======================================================== */}
      <section id="core-values" className="py-20 lg:py-32 px-4 sm:px-8 lg:px-12 bg-white border-b border-[#123F32]/10">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Section Header */}
          <div className="max-w-4xl">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#CF9D42] block mb-4">
              OUR CORE VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123F32] tracking-tight leading-tight">
              Customer Satisfaction. Quality. Timely Development.
            </h2>
            <div className="w-16 h-0.5 bg-[#123F32] mt-6 mb-6" />
            <p className="text-lg sm:text-xl text-[#26332E]/85 leading-relaxed font-normal">
              "{companyData.value}"
            </p>
          </div>

          {/* Editorial 3-Pillar Treatment with Thin Dividing Rules */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#123F32]/15 border-t border-b border-[#123F32]/15 mt-14 sm:mt-20">
            
            {/* Pillar 1 */}
            <div className="py-10 sm:py-12 md:py-14 md:px-8 lg:px-12 first:md:pl-0">
              <span className="text-sm font-mono font-bold text-[#CF9D42] tracking-widest block mb-4">
                [ 01 ]
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#123F32] tracking-tight mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-sm sm:text-base text-[#26332E]/75 leading-relaxed font-normal">
                Dedicated client alignment across global drug manufacturing partnerships, transparent technical governance, flexible batch quantities, and proactive customer engagement.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="py-10 sm:py-12 md:py-14 md:px-8 lg:px-12">
              <span className="text-sm font-mono font-bold text-[#CF9D42] tracking-widest block mb-4">
                [ 02 ]
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#123F32] tracking-tight mb-3">
                Cost-Effective Quality
              </h3>
              <p className="text-sm sm:text-base text-[#26332E]/75 leading-relaxed font-normal">
                Synthesizing robust process chemistry with optimized yields, minimal raw-material overhead, and strict QbD controls ensuring reproducible commercial standards.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="py-10 sm:py-12 md:py-14 md:px-8 lg:px-12 last:md:pr-0">
              <span className="text-sm font-mono font-bold text-[#CF9D42] tracking-widest block mb-4">
                [ 03 ]
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#123F32] tracking-tight mb-3">
                Timely Development
              </h3>
              <p className="text-sm sm:text-base text-[#26332E]/75 leading-relaxed font-normal">
                Committed development and delivery timelines from initial milligram exploratory scouting to pilot validation and multi-tonne commercial supply cycles.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          EDITORIAL TEASER: CAPABILITIES & PRODUCT DISCOVERY
          ======================================================== */}
      <section className="py-16 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#123F32] text-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C5A65A]">
                SPECIALITY MOLECULES &amp; API INTERMEDIATES
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Comprehensive development services from milligram scouting to multi-tonne supply.
              </h2>
              <p className="text-sm sm:text-base text-white/70 max-w-2xl font-light leading-relaxed">
                Discover our verified catalogue of 100+ active pharmaceutical intermediates, OLED functional materials, cosmetic active ingredients, and custom synthesis solutions.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-3 sm:space-y-4">
              <button
                onClick={() => onNavigate('products')}
                className="w-full py-4 px-6 bg-[#C5A65A] text-[#123F32] font-bold text-xs uppercase tracking-widest hover:bg-[#D8BC75] transition-colors text-center"
              >
                BROWSE PRODUCT CATALOGUE
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-4 px-6 border border-white/30 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#123F32] transition-colors text-center"
              >
                REQUEST CUSTOM PROPOSAL
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
