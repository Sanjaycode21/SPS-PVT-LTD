import React from 'react';
import { PageId } from '../../types';
import { companyData } from '../../data/companyData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#123F32] text-[#F7F8F4] border-t-2 border-[#C5A65A]/40 pt-16 pb-12 transition-colors w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Top Grid: Asymmetrical Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-14 border-b border-white/10">
          
          {/* Brand & Identity Column (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white p-3 sm:p-4 inline-block">
              <img
                src="/images/sps-logo.png"
                alt="SHITAL PRATHIKSHA SCIENCES PVT. LTD. - Developing Nature's Potential through Research and Development"
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain"
              />
            </div>
            
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              {companyData.shortDescription}
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs tracking-widest uppercase text-[#C5A65A]">
              <span className="w-2 h-2 bg-[#C5A65A] inline-block" />
              <span>Inception {companyData.inception} • Hyderabad, India</span>
            </div>
          </div>

          {/* Navigation Quick Links (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#C5A65A]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-white/80 hover:text-[#C5A65A] transition-colors focus:outline-none focus-visible:underline text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-white/80 hover:text-[#C5A65A] transition-colors focus:outline-none focus-visible:underline text-left"
                >
                  Product Catalogue (100+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-white/80 hover:text-[#C5A65A] transition-colors focus:outline-none focus-visible:underline text-left"
                >
                  R&amp;D &amp; CDMO Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-white/80 hover:text-[#C5A65A] transition-colors focus:outline-none focus-visible:underline text-left"
                >
                  Contact &amp; Facilities
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Office (2.5 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#C5A65A]">
              Corporate Office
            </h4>
            <div className="text-xs text-white/75 leading-relaxed space-y-2">
              <p>
                {companyData.office.plot}<br />
                {companyData.office.colony}<br />
                {companyData.office.city}, {companyData.office.state} {companyData.office.pincode}<br />
                India
              </p>
              <p className="pt-1 font-medium text-white">
                Tel: <a href="tel:+917416163582" className="hover:text-[#C5A65A] transition-colors">+91 7416163582</a>
              </p>
            </div>
          </div>

          {/* R&D Facility (2.5 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#C5A65A]">
              R&amp;D Facility &amp; Plant
            </h4>
            <div className="text-xs text-white/75 leading-relaxed space-y-2">
              <p>
                {companyData.rdFacility.plot}<br />
                {companyData.rdFacility.area}<br />
                {companyData.rdFacility.city}, {companyData.rdFacility.state} {companyData.rdFacility.pincode}<br />
                India
              </p>
              <p className="pt-1 font-medium text-white">
                Tel: <a href="tel:+918691921888" className="hover:text-[#C5A65A] transition-colors">+91 8691921888</a>
              </p>
              <p className="text-white/60">
                Email: <a href="mailto:info@shitalprathiksha.com" className="hover:text-[#C5A65A] transition-colors">info@shitalprathiksha.com</a>
              </p>
              <p className="text-white/60">
                Hours: {companyData.workingHours}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/50 space-y-4 sm:space-y-0">
          <p>
            © {companyData.inception} {companyData.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-white/40">API Intermediates • CRAMS • Fine Chemicals • Impurities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
