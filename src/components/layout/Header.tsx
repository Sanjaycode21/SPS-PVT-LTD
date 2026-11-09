import React, { useState } from 'react';
import { PageId } from '../../types';
import { MolecularDivider } from './MolecularDivider';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F8F4] transition-colors w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="flex items-center justify-between pt-2 sm:pt-2.5 pb-1 sm:pb-1.5">
          {/* Logo with preserved original proportions and tagline, smoothly blended into bg */}
          <button
            onClick={() => onNavigate('home')}
            className="relative z-20 flex items-center text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#123F32] group max-w-[260px] xs:max-w-[320px] sm:max-w-[420px] lg:max-w-none flex-shrink-0"
            aria-label="SHITAL PRATHIKSHA SCIENCES PVT. LTD. - Home"
          >
            <img
              src="/images/sps-logo.png"
              alt="SHITAL PRATHIKSHA SCIENCES PVT. LTD. Logo - Developing Nature's Potential through Research and Development"
              className="h-[84px] sm:h-[96px] xl:h-[116px] w-auto max-w-none object-contain transition-transform duration-300 group-hover:opacity-95 block shrink-0"
            />
          </button>

          {/* Desktop Navigation - Compact spacing & 3px baseline distance */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <div key={item.id} className="relative group py-1">
                  {/* Navigation Button */}
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`relative z-10 px-3.5 lg:px-4 py-1.5 font-sans text-xs lg:text-sm font-semibold tracking-wide uppercase transition-all duration-200 ease-out transform group-hover:-translate-y-[2px] group-focus-visible:-translate-y-[2px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#123F32] ${
                      isActive ? 'text-[#123F32]' : 'text-[#26332E]/80 hover:text-[#123F32]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Active Page Indicator: Subtle Muted Gold Underline */}
                    {isActive ? (
                      <span className="absolute bottom-0 left-3.5 right-3.5 lg:left-4 lg:right-4 h-[2px] bg-[#CF9D42] block transition-all" />
                    ) : (
                      <span className="absolute bottom-0 left-3.5 right-3.5 lg:left-4 lg:right-4 h-[1px] bg-transparent group-hover:bg-[#123F32]/20 block transition-all" />
                    )}
                  </button>
                </div>
              );
            })}

            {/* Contact Us Button: Solid Forest Green, Sharp Rectangular Geometry with arrow */}
            <div className="relative group py-1 pl-1 sm:pl-2">
              <button
                onClick={() => onNavigate('contact')}
                className={`relative z-10 px-4 sm:px-5 lg:px-6 py-2 bg-[#123F32] text-white font-sans text-xs lg:text-sm font-semibold tracking-widest uppercase transition-all duration-200 ease-out transform group-hover:-translate-y-[2px] group-hover:bg-[#164431] group-hover:shadow-[0_4px_12px_rgba(18,63,50,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CF9D42] flex items-center space-x-1.5 ${
                  currentPage === 'contact' ? 'border-b-2 border-[#CF9D42]' : 'border-b-2 border-transparent'
                }`}
              >
                <span>Contact Us</span>
                <span className="text-sm font-normal">↗</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center flex-shrink-0 pl-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#123F32] bg-[#EAECE4] hover:bg-[#DDE0D4] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#123F32]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`h-0.5 bg-[#123F32] w-full transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`h-0.5 bg-[#123F32] w-full transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`h-0.5 bg-[#123F32] w-full transition-transform duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Molecular Divider directly anchored ~3px beneath header content */}
      <MolecularDivider />

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#123F32]/15 bg-[#F7F8F4] px-6 py-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors flex items-center justify-between ${
                currentPage === item.id
                  ? 'text-[#123F32] border-l-2 border-[#CF9D42] pl-3'
                  : 'text-[#26332E]/80 hover:text-[#123F32] pl-3'
              }`}
            >
              <span>{item.label}</span>
              {currentPage === item.id && (
                <span className="w-1.5 h-1.5 bg-[#CF9D42]" />
              )}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-3 bg-[#123F32] text-white font-sans text-xs font-semibold tracking-widest uppercase hover:bg-[#164431] transition-colors flex items-center justify-center space-x-1"
            >
              <span>Contact Us</span>
              <span className="text-sm font-normal">↗</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
