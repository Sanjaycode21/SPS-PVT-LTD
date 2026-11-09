import React, { useState } from 'react';
import { companyData } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    enquiryType: 'API Intermediates Sourcing',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      enquiryType: 'API Intermediates Sourcing',
      message: ''
    });
  };

  return (
    <div className="w-full bg-[#F7F8F4] min-h-screen">
      {/* ========================================================
          INTRODUCTORY SECTION
          - "Let's Start a Conversation."
          - Spacious, minimalist editorial layout
          ======================================================== */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 px-4 sm:px-8 lg:px-12 border-b border-[#123F32]/10 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C5A65A]" />
              <span className="text-xs font-bold tracking-widest-editorial uppercase text-[#C5A65A]">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#123F32] tracking-tight leading-tight">
              Let's Start a Conversation.
            </h1>

            <p className="text-base sm:text-lg text-[#26332E]/80 leading-relaxed font-normal">
              We welcome global pharmaceutical innovators, drug developers, and procurement teams to discuss API intermediate supply, custom process development, RSM justifications, and commercial manufacturing partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          MAIN CONTENT: ASYMMETRICAL LOCATIONS & CONTACT FORM
          ======================================================== */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 5 cols: Corporate Locations (Two locations presented separately) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#C5A65A]">
                  OPERATIONAL SITES
                </span>
                <h2 className="text-2xl font-bold text-[#123F32] mt-1">
                  Our Locations in Hyderabad
                </h2>
                <p className="text-xs text-[#26332E]/70 mt-2">
                  Operating two dedicated facilities in the pharmaceutical capital of India.
                </p>
              </div>

              {/* Location 1: OFFICE */}
              <div className="p-8 bg-white border border-[#123F32]/15 border-l-4 border-l-[#123F32] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#123F32]">
                    CORPORATE OFFICE
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[#C5A65A] bg-[#F7F8F4] px-2 py-0.5 border border-[#C5A65A]/30">
                    Almasguda
                  </span>
                </div>

                <div className="text-sm text-[#26332E] leading-relaxed">
                  <p className="font-semibold text-[#123F32]">{companyData.office.rawAddress}</p>
                  <p className="text-xs text-[#26332E]/70 mt-1">Telangana, INDIA</p>
                </div>

                <div className="pt-3 border-t border-[#123F32]/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#26332E]/60 uppercase font-semibold">Telephone:</span>
                    <a
                      href="tel:+917416163582"
                      className="font-bold text-[#123F32] hover:text-[#C5A65A] transition-colors"
                    >
                      +91 7416163582
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#26332E]/60 uppercase font-semibold">Official Email:</span>
                    <a
                      href="mailto:info@shitalprathiksha.com"
                      className="font-medium text-[#123F32] hover:text-[#C5A65A] transition-colors"
                    >
                      info@shitalprathiksha.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location 2: R&D FACILITY */}
              <div className="p-8 bg-white border border-[#123F32]/15 border-l-4 border-l-[#C5A65A] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#123F32]">
                    R&D FACILITY & PILOT PLANT
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[#123F32] bg-[#EAECE4] px-2 py-0.5 border border-[#123F32]/20">
                    IDA Cherlapally
                  </span>
                </div>

                <div className="text-sm text-[#26332E] leading-relaxed">
                  <p className="font-semibold text-[#123F32]">{companyData.rdFacility.rawAddress}</p>
                  <p className="text-xs text-[#26332E]/70 mt-1">Telangana, INDIA</p>
                </div>

                <div className="pt-3 border-t border-[#123F32]/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#26332E]/60 uppercase font-semibold">Telephone:</span>
                    <a
                      href="tel:+918691921888"
                      className="font-bold text-[#123F32] hover:text-[#C5A65A] transition-colors"
                    >
                      +91 8691921888
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#26332E]/60 uppercase font-semibold">Direct Facility:</span>
                    <a
                      href="mailto:info@shitalprathiksha.com"
                      className="font-medium text-[#123F32] hover:text-[#C5A65A] transition-colors"
                    >
                      info@shitalprathiksha.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#26332E]/60 uppercase font-semibold">Facility Hours:</span>
                    <span className="font-medium text-[#26332E]">
                      {companyData.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Research Protocol Note */}
              <div className="p-6 bg-[#123F32] text-white space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A65A]">
                  CONFIDENTIALITY & CDAs
                </span>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  All technical inquiries and synthetic structures shared with our team are protected under bilateral Non-Disclosure Agreements (CDAs).
                </p>
              </div>

            </div>

            {/* Right 7 cols: Clean Rectangular Contact Form */}
            <div className="lg:col-span-7 bg-white border border-[#123F32]/15 p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              
              <div className="mb-8 pb-6 border-b border-[#123F32]/10">
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#C5A65A]">
                  CORPORATE INQUIRY FORM
                </span>
                <h3 className="text-2xl font-bold text-[#123F32] mt-1">
                  Submit Your Project Requirements
                </h3>
                <p className="text-xs text-[#26332E]/70 mt-1">
                  Fields marked with an asterisk (*) are required. Our team responds within 24 working hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 bg-[#123F32] text-white flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-[#123F32]">
                      Inquiry Dispatched Successfully
                    </h4>
                    <p className="text-sm text-[#26332E]/80 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.fullName}</strong>. Your communication regarding <strong>{formData.enquiryType}</strong> has been routed to our technical development desk.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F7F8F4] max-w-md mx-auto text-xs text-[#26332E]/70 text-left space-y-1 border border-[#123F32]/10">
                    <div>Organization: <strong className="text-[#123F32]">{formData.companyName}</strong></div>
                    <div>Email: <strong className="text-[#123F32]">{formData.email}</strong></div>
                    {formData.phone && <div>Phone: <strong className="text-[#123F32]">{formData.phone}</strong></div>}
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 bg-[#123F32] text-white text-xs uppercase font-bold tracking-widest hover:bg-[#164431] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#123F32] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Kumar"
                        className="w-full px-4 py-3 bg-[#F7F8F4] border border-[#123F32]/25 text-sm text-[#26332E] focus:outline-none focus:border-[#123F32] focus:ring-1 focus:ring-[#123F32] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#123F32] mb-2">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Biopharma Ltd"
                        className="w-full px-4 py-3 bg-[#F7F8F4] border border-[#123F32]/25 text-sm text-[#26332E] focus:outline-none focus:border-[#123F32] focus:ring-1 focus:ring-[#123F32] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#123F32] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 bg-[#F7F8F4] border border-[#123F32]/25 text-sm text-[#26332E] focus:outline-none focus:border-[#123F32] focus:ring-1 focus:ring-[#123F32] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#123F32] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 / International"
                        className="w-full px-4 py-3 bg-[#F7F8F4] border border-[#123F32]/25 text-sm text-[#26332E] focus:outline-none focus:border-[#123F32] focus:ring-1 focus:ring-[#123F32] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#123F32] mb-2">
                      Enquiry Type *
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F7F8F4] border border-[#123F32]/25 text-sm text-[#26332E] focus:outline-none focus:border-[#123F32] focus:ring-1 focus:ring-[#123F32] transition-colors"
                    >
                      <option>API Intermediates Sourcing</option>
                      <option>Small Molecules Custom Synthesis</option>
                      <option>RSM Strategic Justification & Supply</option>
                      <option>Process Development & Technology Transfer</option>
                      <option>FTE-Based Dedicated Research Team</option>
                      <option>Full CDMO (Pilot to Tonne-Scale)</option>
                      <option>Impurities Identification & Profiling</option>
                      <option>General Corporate & Partnership Enquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#123F32] mb-2">
                      Project Description / Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the molecular structure, required batch quantity, technical specifications, and expected delivery timeframe..."
                      className="w-full px-4 py-3 bg-[#F7F8F4] border border-[#123F32]/25 text-sm text-[#26332E] focus:outline-none focus:border-[#123F32] focus:ring-1 focus:ring-[#123F32] transition-colors"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-[11px] text-[#26332E]/60">
                      Working hours: 9.00 AM to 6.00 PM (IST)
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-4 bg-[#123F32] text-white font-sans text-xs font-bold tracking-widest uppercase hover:bg-[#164431] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A65A]"
                    >
                      Transmit Project Enquiry
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
