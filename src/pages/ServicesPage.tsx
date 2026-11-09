import React from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#F7F8F4]">
      {/* ========================================================
          INTRODUCTORY SECTION (Editorial Scientific Capabilities)
          - Headline: "Research Expertise. Manufacturing Precision."
          - Asymmetrical composition
          ======================================================== */}
      <section className="pt-16 pb-14 lg:pt-24 lg:pb-20 px-4 sm:px-8 lg:px-12 border-b border-[#123F32]/10 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-[2px] bg-[#C5A65A]" />
                <span className="text-xs font-bold tracking-widest-editorial uppercase text-[#C5A65A]">
                  TECHNICAL CAPABILITIES & EXPERTISE
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-[#123F32] tracking-tightest leading-tight">
                Research Expertise.<br />
                <span className="text-[#164431] font-light">Manufacturing Precision.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#26332E]/80 max-w-2xl leading-relaxed">
                SHITAL PRATHIKSHA SCIENCES delivers end-to-end chemical development, from route scouting and experimental design through pilot demonstration to multi-tonne commercial manufacture.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-[#F7F8F4] border-l-4 border-[#123F32] space-y-3">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#C5A65A]">
                CAPABILITY HIGHLIGHTS
              </span>
              <ul className="text-xs text-[#26332E]/80 space-y-2 font-medium">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#123F32]" />
                  <span>Quality by Design (QbD) & DoE Methodologies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A65A]" />
                  <span>Cryogenic, High Pressure & High Temp Capabilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#123F32]" />
                  <span>Genotoxic & Regulatory Impurity Profiling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A65A]" />
                  <span>Dedicated FTE Scientific Continuity</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          ASYMMETRICAL EDITORIAL SERVICES PRESENTATION
          - Each service has a distinctive visual composition
          ======================================================== */}
      <div className="divide-y divide-[#123F32]/10">
        
        {/* SERVICE 01: SMALL MOLECULES */}
        <section id="small-molecules" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#F7F8F4]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-baseline space-x-4">
                  <span className="text-4xl sm:text-5xl font-mono font-extrabold text-[#C5A65A]">01</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#123F32]/60">CDMO & Synthesis</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123F32] tracking-tight">
                  Small Molecules
                </h2>

                <p className="text-base text-[#26332E] leading-relaxed font-medium">
                  {servicesData[0].description}
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-[#26332E]/80 leading-relaxed font-light">
                  {servicesData[0].paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Specific Chemical Capabilities Tags */}
                <div className="pt-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#123F32] mb-3">
                    Core Chemical Capabilities:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {servicesData[0].capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="p-3 bg-white border border-[#123F32]/15 text-xs font-semibold text-[#123F32] flex items-center space-x-2"
                      >
                        <span className="w-1 h-1 bg-[#C5A65A]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative border-2 border-[#123F32] p-2 bg-white">
                  <img
                    src="/images/service-small-molecules.jpg"
                    alt="Small molecule chemical synthesis apparatus"
                    className="w-full h-[380px] object-cover filter contrast-105"
                  />
                  <div className="mt-2 p-4 bg-[#123F32] text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A65A]">
                      Quality by Design
                    </span>
                    <p className="text-xs text-white/90 font-light mt-1">
                      Systematic QbD methodology minimising synthetic risk and ensuring scalable commercial yield.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICE 02: API & INTERMEDIATES DEVELOPMENT */}
        <section id="api-intermediates" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-[1440px] mx-auto space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <span className="text-4xl sm:text-5xl font-mono font-extrabold text-[#C5A65A]">02</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123F32] tracking-tight mt-2">
                  API & Intermediates Development
                </h2>
                <div className="w-10 h-1 bg-[#C5A65A] mt-4" />
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="text-lg text-[#123F32] font-semibold leading-relaxed">
                  {servicesData[1].description}
                </p>
                <p className="text-sm text-[#26332E]/80 leading-relaxed font-light">
                  {servicesData[1].paragraphs[0]}
                </p>
              </div>
            </div>

            {/* Asymmetrical Horizontal Lifecycle Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6">
              {servicesData[1].capabilities.map((step, idx) => (
                <div
                  key={step}
                  className="p-5 bg-[#F7F8F4] border-t-2 border-[#123F32] flex flex-col justify-between h-36"
                >
                  <span className="font-mono text-xs text-[#C5A65A] font-bold">
                    STAGE 0{idx + 1}
                  </span>
                  <div className="text-sm font-bold text-[#123F32] leading-snug">
                    {step}
                  </div>
                  <div className="text-[10px] text-[#26332E]/60 uppercase tracking-wider">
                    Full Documentation
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SERVICE 03: RSMS (REGULATORY STARTING MATERIALS) */}
        <section id="rsms" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#26332E] text-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="border border-white/20 p-2">
                  <img
                    src="/images/service-rsm.jpg"
                    alt="Regulatory Starting Materials crystalline structure"
                    className="w-full h-[360px] object-cover"
                  />
                  <div className="p-4 bg-[#123F32] text-xs text-white/80">
                    <strong className="text-[#C5A65A] block uppercase tracking-wider text-[10px] mb-1">
                      ICH Q7 / Q11 Compliance
                    </strong>
                    Strategic selection impacting long-term regulatory approval and cost structure.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="flex items-baseline space-x-4">
                  <span className="text-4xl sm:text-5xl font-mono font-extrabold text-[#C5A65A]">03</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C5A65A]">Strategic Regulatory Sourcing</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  RSMs (Regulatory Starting Materials)
                </h2>

                <p className="text-base text-white/90 leading-relaxed font-medium">
                  {servicesData[2].description}
                </p>

                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {servicesData[2].paragraphs[0]}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  {servicesData[2].capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="p-3 bg-white/5 border border-white/15 text-xs text-white font-medium flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#C5A65A]" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICE 04: PROCESS DEVELOPMENT & TECH TRANSFER */}
        <section id="process-development" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-[1440px] mx-auto space-y-10">
            
            <div className="flex items-baseline space-x-4">
              <span className="text-4xl sm:text-5xl font-mono font-extrabold text-[#C5A65A]">04</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#123F32]/60">Scale-Up Engineering</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-5">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123F32] tracking-tight">
                  Process Development & Technology Transfer
                </h2>

                <p className="text-base text-[#26332E] font-semibold leading-relaxed">
                  {servicesData[3].description}
                </p>

                <div className="space-y-4 text-xs sm:text-sm text-[#26332E]/80 font-light leading-relaxed">
                  {servicesData[3].paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="bg-[#F7F8F4] p-8 border-t-4 border-[#123F32] space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#123F32]">
                    Process Safety & Optimization Protocols
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {servicesData[3].capabilities.map((cap) => (
                      <div key={cap} className="p-3 bg-white border border-[#123F32]/10 text-xs font-semibold text-[#123F32]">
                        ✓ {cap}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-[#123F32] text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#C5A65A] font-bold">Demonstration Batches</div>
                    <div className="text-sm font-light text-white/80 mt-1">Full analytical validation before commercial rollout.</div>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-4 py-2 bg-[#C5A65A] text-[#123F32] text-xs font-bold uppercase tracking-wider hover:bg-[#D8BC75]"
                  >
                    Discuss Tech Transfer
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SERVICE 05: FTE-BASED PROCESS DEVELOPMENT */}
        <section id="fte-based" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#F7F8F4]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-baseline space-x-4">
                  <span className="text-4xl sm:text-5xl font-mono font-extrabold text-[#C5A65A]">05</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#123F32]/60">Dedicated Scientific Resource</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123F32] tracking-tight">
                  FTE-Based Process Development
                </h2>

                <p className="text-base text-[#26332E] font-medium leading-relaxed">
                  {servicesData[4].description}
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-[#26332E]/80 font-light leading-relaxed">
                  {servicesData[4].paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {servicesData[4].capabilities.map((cap) => (
                    <div key={cap} className="p-3 bg-white border border-[#123F32]/15 text-xs text-[#123F32] font-semibold">
                      • {cap}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-8 bg-white border-l-4 border-[#C5A65A] shadow-[0_8px_24px_rgba(0,0,0,0.03)] space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A65A]">
                  FTE COLLABORATION MODEL
                </span>
                <h3 className="text-xl font-bold text-[#123F32]">
                  Agile Scientific Continuity
                </h3>
                <p className="text-xs text-[#26332E]/80 leading-relaxed font-normal">
                  Each dedicated scientist brings specialized knowledge in synthetic organic chemistry, organometallic transformations, and heterocyclic synthesis techniques with rapid experimental iteration.
                </p>
                <div className="pt-3 border-t border-[#123F32]/10 text-xs font-medium text-[#123F32]">
                  Direct access to dedicated synthetic chemists and weekly milestone telemetry.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICE 06: CDMO */}
        <section id="cdmo" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#123F32] text-white">
          <div className="max-w-[1440px] mx-auto space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <span className="text-4xl sm:text-5xl font-mono font-extrabold text-[#C5A65A]">06</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                  CDMO (Contract Development & Manufacturing)
                </h2>
                <div className="w-12 h-1 bg-[#C5A65A] mt-4" />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="text-lg text-white font-medium leading-relaxed">
                  {servicesData[5].description}
                </p>
                <p className="text-sm text-white/75 font-light leading-relaxed">
                  {servicesData[5].paragraphs[0]}
                </p>
              </div>
            </div>

            {/* Challenging Reaction Envelopes Banner */}
            <div className="bg-[#164431] border border-[#C5A65A]/30 p-8 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A65A]">
                  CRITICAL MANUFACTURING CAPABILITIES
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Handling Challenging Chemical Reaction Envelopes
                </h3>
                <p className="text-xs text-white/70 mt-1 max-w-xl">
                  {servicesData[5].paragraphs[1]}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-6 bg-[#123F32] border-t-2 border-[#C5A65A] space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C5A65A]">Reactions 01</div>
                  <div className="text-base font-bold text-white">Cryogenic Reactions</div>
                  <div className="text-xs text-white/60 font-light">Precision low-temperature syntheses down to ultra-cold reaction bounds.</div>
                </div>

                <div className="p-6 bg-[#123F32] border-t-2 border-[#C5A65A] space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C5A65A]">Reactions 02</div>
                  <div className="text-base font-bold text-white">High Temperature Reactions</div>
                  <div className="text-xs text-white/60 font-light">Thermal cyclisations and intense organic transformations.</div>
                </div>

                <div className="p-6 bg-[#123F32] border-t-2 border-[#C5A65A] space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C5A65A]">Reactions 03</div>
                  <div className="text-base font-bold text-white">High Pressure Reactions</div>
                  <div className="text-xs text-white/60 font-light">Catalytic hydrogenations and pressure-vessel syntheses.</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SERVICE 07: IMPURITIES */}
        <section id="impurities" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-baseline space-x-4">
                  <span className="text-4xl sm:text-5xl font-mono font-extrabold text-[#C5A65A]">07</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#123F32]/60">Analytical & Regulatory Excellence</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123F32] tracking-tight">
                  Impurities
                </h2>

                <p className="text-base text-[#26332E] font-medium leading-relaxed">
                  {servicesData[6].description}
                </p>

                <p className="text-sm text-[#26332E]/80 font-light leading-relaxed">
                  {servicesData[6].paragraphs[0]}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {servicesData[6].capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="p-3 bg-[#F7F8F4] border-l-2 border-[#123F32] text-xs font-semibold text-[#123F32]"
                    >
                      {cap}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="border border-[#123F32]/20 p-2 bg-[#F7F8F4]">
                  <img
                    src="/images/service-impurities.jpg"
                    alt="Precision impurity characterization and chromatography instrumentation"
                    className="w-full h-[360px] object-cover"
                  />
                  <div className="p-4 bg-white text-xs text-[#26332E]/80 border-t border-[#123F32]/10">
                    <strong className="text-[#123F32] block font-bold mb-1">Genotoxic & Degradation Profiling</strong>
                    Strict control strategies ensuring safety and global compliance.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* ========================================================
          ENQUIRY CTA SECTION
          - Direct invitation to discuss development and manufacturing
          ======================================================== */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-[#123F32] text-white border-t border-[#C5A65A]/40 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold tracking-widest-editorial uppercase text-[#C5A65A]">
            START YOUR DEVELOPMENT PROGRAM
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Discuss Your Development & Manufacturing Requirements
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            Our scientific team is available to evaluate your synthetic route, assess thermal safety envelopes, and prepare a detailed CDMO or FTE proposal.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#C5A65A] text-[#123F32] text-xs font-bold uppercase tracking-widest hover:bg-[#D8BC75] transition-colors"
            >
              Contact Our Research Team
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="px-8 py-4 bg-transparent border border-white/40 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#123F32] transition-colors"
            >
              Search Speciality Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
