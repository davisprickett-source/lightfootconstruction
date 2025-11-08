import React from 'react';
import { Page } from '../types';
import { DeerLogo } from './icons/DeerLogo';
import { PhoneIcon, MailIcon, MapPinIcon } from './icons/ContactIcons';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
    return (
        <footer className="bg-black text-brand-light-gray">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-8 md:mb-0">
                        <div className="flex items-center mb-4 gap-3">
                            <DeerLogo className="h-12 w-12" />
                            <div>
                                <h2 className="text-xl font-bold text-brand-white tracking-wide">Lightfoot & Lightfoot</h2>
                                <p className="text-sm sm:text-base text-brand-wood font-bold tracking-widest">CONSTRUCTION</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">Building visions into reality since 1981. Your trusted partner in construction and remodeling.</p>
                    </div>

                    <div>
                        <h3 className="text-md font-semibold text-brand-white tracking-wider uppercase mb-4">Navigate</h3>
                        <ul className="space-y-3">
                            {Object.values(Page).map(page => (
                                <li key={page}>
                                    <button onClick={() => setCurrentPage(page)} className="text-sm text-gray-300 hover:text-brand-orange transition-colors">
                                        {page}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                         <h3 className="text-md font-semibold text-brand-white tracking-wider uppercase mb-4">Contact Info</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center">
                                <PhoneIcon className="w-4 h-4 mr-3 text-brand-orange" />
                                <a href="tel:317-679-9131" className="text-gray-300 hover:text-brand-orange transition-colors">317-679-9131</a>
                            </li>
                            <li className="flex items-center">
                                <MailIcon className="w-4 h-4 mr-3 text-brand-orange" />
                                <a href="mailto:lightfoot.lightfootconstruction@gmail.com" className="text-gray-300 hover:text-brand-orange transition-colors break-all">lightfoot.lightfootconstruction@gmail.com</a>
                            </li>
                             <li className="flex items-center">
                                <MapPinIcon className="w-4 h-4 mr-3 text-brand-orange" />
                                <span className="text-gray-300">Brownsburg, IN</span>
                            </li>
                        </ul>
                    </div>
                     <div className="md:text-center">
                        <h3 className="text-md font-semibold text-brand-white tracking-wider uppercase mb-4">Get Started</h3>
                        <p className="text-gray-400 text-sm mb-4">Ready to discuss your project? Get in touch for a no-obligation estimate.</p>
                        <button onClick={() => setCurrentPage(Page.Contact)} className="w-full md:w-auto bg-brand-orange text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-all duration-300 shadow-sm hover:shadow-lg">
                            Get a Free Estimate
                        </button>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm">
                    <span className="text-white">powered by </span>
                    <a href="https://lumovox.net" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-bold">
                        Lumovox
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
