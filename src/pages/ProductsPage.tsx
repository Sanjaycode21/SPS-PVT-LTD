import React, { useState, useMemo } from 'react';
import productsData from '../data/products.json';
import { ProductItem } from '../types';

export const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [enquiryProduct, setEnquiryProduct] = useState<ProductItem | null>(null);
  const [previewStructure, setPreviewStructure] = useState<{ img: string; name: string; cas: string; item: ProductItem } | null>(null);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: 'Gram scale (Scouting)',
    message: ''
  });

  const categories = [
    'All',
    'Active Pharmaceutical Intermediates',
    'Speciality Molecules (OLEDs)',
    'Fine Chemicals & Cosmetic Intermediates',
    'Speciality Molecules & API Intermediates'
  ];

  // Filtered products list based on search and category
  const filteredProducts = useMemo(() => {
    return (productsData as ProductItem[]).filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        p.name.toLowerCase().includes(query) ||
        p.cas.toLowerCase().includes(query) ||
        p.intermediateOf.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        String(p.sno).includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitted(true);
    setTimeout(() => {
      setEnquiryProduct(null);
      setEnquirySubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        quantity: 'Gram scale (Scouting)',
        message: ''
      });
    }, 2800);
  };

  return (
    <div className="w-full bg-[#F7F8F4]">
      {/* ========================================================
          INTRODUCTORY SECTION (Distinct Editorial Identity)
          - Bold editorial heading: "Precision in Every Molecule."
          - Asymmetrical composition with restrained scientific imagery
          ======================================================== */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 px-4 sm:px-8 lg:px-12 border-b border-[#123F32]/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            {/* Left 7 cols: Editorial Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-[2px] bg-[#C5A65A]" />
                <span className="text-xs font-bold tracking-widest-editorial uppercase text-[#C5A65A]">
                  SCIENTIFIC PRODUCT PORTFOLIO
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#123F32] tracking-tight leading-tight">
                Precision in Every Molecule.
              </h1>

              <p className="text-base sm:text-lg text-[#26332E]/80 max-w-2xl leading-relaxed">
                SHITAL PRATHIKSHA SCIENCES synthesises, tests, and supplies high-purity active pharmaceutical intermediates, specialty organic precursors, and functional fine chemicals engineered to exact global monograph specifications.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#26332E]/70">
                <span className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#123F32]" />
                  <span>100+ Verified Intermediates</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A65A]" />
                  <span>Gram to Multi-Tonne Delivery</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#123F32]" />
                  <span>Verified Molecular Structures &amp; COA</span>
                </span>
              </div>
            </div>

            {/* Right 5 cols: Restrained Scientific Visual Frame */}
            <div className="lg:col-span-5">
              <div className="bg-[#123F32] p-6 lg:p-8 text-white relative">
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#C5A65A]" />
                
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#C5A65A] block mb-2">
                  CATALOGUE SPECIFICATIONS
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Custom Synthesis &amp; Intermediate Supply
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Every product listed below includes its authentic chemical structure and is available for direct quotation, development batch reservation, or custom optimization under rigorous Quality by Design (QbD) control.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                  <span>Inquiries: <strong className="text-white">info@shitalprathiksha.com</strong></span>
                  <span className="text-[#C5A65A] font-semibold">24h Turnaround</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SEARCH & FILTERING TOOLBAR (Asymmetrical Toolbar)
          ======================================================== */}
      <section className="py-8 px-4 sm:px-8 lg:px-12 bg-white border-b border-[#123F32]/10 sticky top-[73px] sm:top-[81px] lg:top-[97px] z-30 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1440px] mx-auto space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input Field with Sharp Rectangular Geometry */}
            <div className="relative flex-1 max-w-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by compound name, CAS number, or target drug (e.g. Tofacitinib, 318487-86-4)..."
                className="w-full px-4 py-3 bg-[#F7F8F4] border border-[#123F32]/25 text-[#26332E] text-xs sm:text-sm placeholder-[#26332E]/40 focus:outline-none focus:border-[#123F32] focus:ring-1 focus:ring-[#123F32] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs uppercase font-semibold text-[#26332E]/60 hover:text-[#123F32]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results count indicator */}
            <div className="text-xs text-[#26332E]/70 font-medium">
              Showing <span className="font-bold text-[#123F32]">{filteredProducts.length}</span> of 100 compounds
            </div>

          </div>

          {/* Category Filter Pills (Sharp Rectangles) */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#26332E]/50 mr-2">
              Filter:
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors ${
                    isSelected
                      ? 'bg-[#123F32] text-white border border-[#123F32]'
                      : 'bg-[#F7F8F4] text-[#26332E]/80 border border-[#123F32]/15 hover:border-[#123F32]/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          STRUCTURED PRODUCT CATALOGUE (Scientific Presentation)
          - Table format on desktop with authentic Structure Images
          - S.No, Structure, Chemical Name, CAS No., Intermediate / Target, Action
          ======================================================== */}
      <section className="py-12 lg:py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          
          {filteredProducts.length === 0 ? (
            <div className="p-16 bg-white border border-[#123F32]/15 text-center space-y-4">
              <h3 className="text-xl font-bold text-[#123F32]">No matching products found</h3>
              <p className="text-sm text-[#26332E]/70 max-w-md mx-auto">
                No intermediate matched your query "{searchQuery}". We provide custom synthesis for undocumented molecules. Contact our research team directly.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="px-6 py-2.5 bg-[#123F32] text-white text-xs uppercase font-bold tracking-widest hover:bg-[#164431]"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="bg-white border border-[#123F32]/15 shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-x-auto">
              
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#123F32] text-white text-[11px] font-bold tracking-widest uppercase border-b border-[#123F32]">
                    <th className="py-4 px-3 sm:px-4 w-14 text-center">S.No.</th>
                    <th className="py-4 px-4 w-28 text-center">Structure</th>
                    <th className="py-4 px-6 min-w-[260px]">Chemical Name / Intermediate</th>
                    <th className="py-4 px-6 min-w-[150px]">CAS Number</th>
                    <th className="py-4 px-6 min-w-[190px]">Intermediate of / Application</th>
                    <th className="py-4 px-6 min-w-[150px]">Category</th>
                    <th className="py-4 px-6 text-right w-28">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#123F32]/10 text-xs sm:text-sm">
                  {filteredProducts.map((prod) => (
                    <tr
                      key={prod.sno}
                      className="hover:bg-[#F7F8F4] transition-colors group"
                    >
                      {/* S.No. */}
                      <td className="py-3 px-3 sm:px-4 text-center font-bold text-[#123F32]/60 group-hover:text-[#123F32]">
                        {prod.sno}
                      </td>

                      {/* Chemical Structure Image */}
                      <td className="py-3 px-4 text-center">
                        {prod.structureImage ? (
                          <div
                            onClick={() => setPreviewStructure({ img: prod.structureImage!, name: prod.name, cas: prod.cas, item: prod })}
                            className="w-20 h-20 bg-white border border-[#123F32]/15 p-1 flex items-center justify-center mx-auto cursor-pointer hover:border-[#123F32] hover:shadow-md transition-all group/struct"
                            title="Click to zoom chemical structure"
                          >
                            <img
                              src={prod.structureImage}
                              alt={`Chemical structure of ${prod.name}`}
                              className="w-full h-full object-contain group-hover/struct:scale-105 transition-transform"
                              loading="eager"
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 bg-[#F7F8F4] border border-[#123F32]/10 flex items-center justify-center mx-auto text-[10px] text-[#26332E]/40 font-mono">
                            On Request
                          </div>
                        )}
                      </td>

                      {/* Chemical Name */}
                      <td className="py-3 px-6 font-semibold text-[#123F32] leading-snug">
                        <span className="font-mono text-xs sm:text-sm tracking-tight text-[#164431]">
                          {prod.name}
                        </span>
                      </td>

                      {/* CAS Number */}
                      <td className="py-3 px-6 font-mono text-xs">
                        {prod.hasCas ? (
                          <span className="px-2 py-1 bg-[#EAECE4] text-[#123F32] font-medium border border-[#123F32]/10 inline-block">
                            {prod.cas}
                          </span>
                        ) : (
                          <span className="text-[#26332E]/40 italic">
                            On Enquiry
                          </span>
                        )}
                      </td>

                      {/* Intermediate Of */}
                      <td className="py-3 px-6 text-[#26332E]/90">
                        {prod.intermediateOf !== 'Speciality Synthesis' ? (
                          <span className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#123F32]">
                            <span className="w-1.5 h-1.5 bg-[#C5A65A]" />
                            <span>{prod.intermediateOf}</span>
                          </span>
                        ) : (
                          <span className="text-xs text-[#26332E]/50">
                            Custom Synthesis Precursor
                          </span>
                        )}
                      </td>

                      {/* Category */}
                      <td className="py-3 px-6 text-xs text-[#26332E]/70 font-medium">
                        {prod.category}
                      </td>

                      {/* Action: Enquire Button */}
                      <td className="py-3 px-6 text-right">
                        <button
                          onClick={() => setEnquiryProduct(prod)}
                          className="px-3.5 py-1.5 bg-transparent border border-[#123F32] text-[#123F32] font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#123F32] hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#123F32]"
                        >
                          Enquire
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          )}

        </div>
      </section>

      {/* ========================================================
          STRUCTURE PREVIEW ZOOM MODAL
          - Opens when clicking any molecule image
          ======================================================== */}
      {previewStructure && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123F32]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white max-w-lg w-full p-6 sm:p-8 border-2 border-[#123F32] shadow-2xl relative space-y-4">
            <button
              onClick={() => setPreviewStructure(null)}
              className="absolute top-4 right-4 text-[#26332E]/60 hover:text-[#123F32] text-sm uppercase font-bold tracking-widest p-2"
              aria-label="Close Preview"
            >
              ✕ Close
            </button>

            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#C5A65A]">
                CHEMICAL STRUCTURE INSPECTION
              </span>
              <h3 className="text-xl font-bold text-[#123F32] font-mono mt-1">
                {previewStructure.name}
              </h3>
              <p className="text-xs text-[#26332E]/70 mt-1">
                CAS Registry Number: <strong className="font-mono text-[#123F32]">{previewStructure.cas}</strong>
              </p>
            </div>

            <div className="w-full h-64 bg-white border border-[#123F32]/15 p-4 flex items-center justify-center">
              <img
                src={previewStructure.img}
                alt={previewStructure.name}
                className="max-w-full max-h-full object-contain filter contrast-125"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setPreviewStructure(null)}
                className="px-4 py-2 text-xs uppercase font-semibold text-[#26332E]/70 hover:text-[#123F32]"
              >
                Back to Catalogue
              </button>
              <button
                onClick={() => {
                  const item = previewStructure.item;
                  setPreviewStructure(null);
                  setEnquiryProduct(item);
                }}
                className="px-6 py-2.5 bg-[#123F32] text-white text-xs uppercase font-bold tracking-widest hover:bg-[#164431]"
              >
                Enquire About This Molecule
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          PRODUCT ENQUIRY MODAL / SLIDE-IN
          - Pre-populated with product name, CAS, and Structure Image
          ======================================================== */}
      {enquiryProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123F32]/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-modal-title"
        >
          <div className="bg-white max-w-xl w-full p-6 sm:p-8 border-2 border-[#123F32] shadow-2xl relative">
            
            {/* Close button */}
            <button
              onClick={() => setEnquiryProduct(null)}
              className="absolute top-4 right-4 text-[#26332E]/60 hover:text-[#123F32] text-sm uppercase font-bold tracking-widest p-2"
              aria-label="Close Enquiry Dialog"
            >
              ✕ Close
            </button>

            {enquirySubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-[#123F32] text-white flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#123F32]">
                  Enquiry Submitted
                </h3>
                <p className="text-sm text-[#26332E]/80 max-w-sm mx-auto">
                  Thank you. Our technical synthesis team has received your inquiry for <strong>{enquiryProduct.name}</strong>. We will reply within 24 working hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#C5A65A]">
                    PRODUCT ENQUIRY PATHWAY
                  </span>
                  <h3 id="enquiry-modal-title" className="text-xl font-bold text-[#123F32]">
                    Request Technical &amp; Commercial Quote
                  </h3>
                </div>

                {/* Pre-filled product summary banner with Structure Image */}
                <div className="p-3.5 bg-[#F7F8F4] border-l-2 border-[#C5A65A] flex items-center gap-4">
                  {enquiryProduct.structureImage && (
                    <div className="w-20 h-20 bg-white border border-[#123F32]/15 p-1 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={enquiryProduct.structureImage}
                        alt={enquiryProduct.name}
                        className="max-w-full max-h-full object-contain filter contrast-125"
                      />
                    </div>
                  )}
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-[#123F32]">
                      Product: <span className="font-mono">{enquiryProduct.name}</span>
                    </div>
                    <div className="text-[#26332E]/70 flex flex-wrap items-center gap-x-4 gap-y-0.5">
                      <span>CAS: <strong className="font-mono">{enquiryProduct.cas}</strong></span>
                      <span>Application: <strong>{enquiryProduct.intermediateOf}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#26332E]/80 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F7F8F4] border border-[#123F32]/25 text-xs focus:outline-none focus:border-[#123F32]"
                      placeholder="e.g. Dr. Rajesh Kumar"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#26332E]/80 mb-1">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F7F8F4] border border-[#123F32]/25 text-xs focus:outline-none focus:border-[#123F32]"
                      placeholder="e.g. Pharma Res Ltd"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#26332E]/80 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F7F8F4] border border-[#123F32]/25 text-xs focus:outline-none focus:border-[#123F32]"
                      placeholder="name@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#26332E]/80 mb-1">
                      Required Quantity
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F7F8F4] border border-[#123F32]/25 text-xs focus:outline-none focus:border-[#123F32]"
                    >
                      <option>Gram scale (Scouting / Reference standard)</option>
                      <option>100g – 1kg (Preclinical / Process dev)</option>
                      <option>1kg – 25kg (Pilot batch)</option>
                      <option>Commercial Multi-tonne scale</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#26332E]/80 mb-1">
                    Technical Specifications / Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F7F8F4] border border-[#123F32]/25 text-xs focus:outline-none focus:border-[#123F32]"
                    placeholder="Specific purity specifications, chromatographic criteria, delivery target..."
                  />
                </div>

                <div className="pt-2 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setEnquiryProduct(null)}
                    className="px-4 py-2 text-xs uppercase font-semibold text-[#26332E]/70 hover:text-[#123F32]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#123F32] text-white text-xs uppercase font-bold tracking-widest hover:bg-[#164431]"
                  >
                    Submit Quotation Request
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </div>
  );
};
