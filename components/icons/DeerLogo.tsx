
import React from 'react';

export const DeerLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M12 2v5" />
        <path d="M12 12c-4 0-7 3-7 7" />
        <path d="M12 12c4 0 7 3 7 7" />
        <path d="M17 7c0-2.5-2-4.5-4-5" />
        <path d="M7 7c0-2.5 2-4.5 4-5" />
        <path d="M17 7a2 2 0 00-2-2h-1" />
        <path d="M7 7a2 2 0 012-2h1" />
        <path d="M18 12h2a1 1 0 011 1v2" />
        <path d="M6 12H4a1 1 0 00-1 1v2" />
        <path d="M12 19c-2 0-4-1-4-3" />
        <path d="M12 19c2 0 4-1 4-3" />
    </svg>
);
