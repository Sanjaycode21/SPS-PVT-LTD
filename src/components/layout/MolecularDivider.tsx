import React from 'react';

export const MolecularDivider: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-transparent select-none pt-0 pb-0.5" aria-hidden="true">
      <svg
        className="w-full h-6 sm:h-7 block"
        viewBox="0 0 1440 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Continuous zigzag molecular chain with crisp, visible stroke */}
        <polyline
          points="0,18 155,18 281,18 318,18 339,17 416,10 488,12 572,11 652,18 696,18 820,18 899,9 986,14 1070,15 1138,11 1212,18 1392,18 1440,18"
          fill="none"
          stroke="#123F32"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Forest Green Nodes */}
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

        {/* Rich Gold Accent Nodes matching Image 3 (#CF9D42) - Full unclipped complete circles */}
        <circle cx="416" cy="10" r="5.2" fill="#CF9D42" stroke="#123F32" strokeWidth="1" />
        <circle cx="899" cy="9" r="5.5" fill="#CF9D42" stroke="#123F32" strokeWidth="1" />
        <circle cx="1138" cy="11" r="5.2" fill="#CF9D42" stroke="#123F32" strokeWidth="1" />
      </svg>
    </div>
  );
};
