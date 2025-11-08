
import React, { useState } from 'react';
import { Page } from '../types';
import { DeerLogo } from './icons/DeerLogo';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = Object.values(Page).filter(p => p !== Page.Contact);

    const NavLink: React.FC<{ page: Page, isMobile?: boolean }> = ({ page, isMobile = false }) => (
        <button
            onClick={() => {
                setCurrentPage(page);
                if (isMobile) setIsMenuOpen(false);
            }}
            className={`font-semibold transition-colors duration-300 ${isMobile ? 'block text-left w-full px-4 py-3' : 'px-4 py-2'} ${
                currentPage === page 
                ? 'text-brand-orange' 
                : 'text-brand-charcoal hover:text-brand-orange'
            }`}
        >
            {page}
        </button>
    );

    return (
        <header className="bg-brand-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div 
                        className="flex items-center cursor-pointer"
                        onClick={() => setCurrentPage(Page.Home)}
                    >
                       <DeerLogo className="h-16 w-16 text-brand-charcoal" />
                        <div className="ml-2">
                            <span className="text-xl font-bold text-brand-charcoal tracking-wide block">Lightfoot & Lightfoot</span>
                            <span className="text-xs text-brand-wood font-bold tracking-widest block">CONSTRUCTION</span>
                        </div>
                    </div>
                    <nav className="hidden lg:flex items-center space-x-2">
                        {navItems.map(item => <NavLink key={item} page={item} />)}
                    </nav>
                    <div className="hidden lg:flex items-center">
                         <button onClick={() => setCurrentPage(Page.Contact)} className="bg-brand-orange text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5">
                            Free Estimate
                        </button>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-brand-charcoal hover:text-brand-orange hover:bg-gray-100 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 16h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-brand-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map(item => <NavLink key={item} page={item} isMobile />)}
                        <div className="px-2 pt-2">
                             <button onClick={() => { setCurrentPage(Page.Contact); setIsMenuOpen(false); }} className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-all duration-300 shadow-sm">
                                Free Estimate
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
