
import React from 'react';
import { MapPinIcon } from '../icons/ContactIcons';

const locations = [
    'Brownsburg',
    'Avon',
    'Plainfield',
    'Zionsville',
    'Carmel',
    'Fishers',
    'Indianapolis (Greater Area)',
    'And surrounding communities...'
];

const Locations: React.FC = () => {
    return (
        <div className="py-20 bg-brand-dark-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-brand-orange font-semibold tracking-wide uppercase">Our Service Area</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold font-heading tracking-tight text-brand-cream sm:text-4xl">
                        Proudly Serving Central Indiana
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 lg:mx-auto">
                        We are based in Brownsburg and provide our top-tier construction services to communities throughout the greater Indianapolis area.
                    </p>
                </div>

                <div className="mt-12">
                    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {locations.map((location, index) => (
                            <div key={index} className="flex items-center p-4 bg-brand-dark rounded-lg shadow-md">
                                <MapPinIcon className="h-6 w-6 text-brand-orange flex-shrink-0 mr-4" />
                                <span className="text-brand-cream font-medium">{location}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                 <div className="mt-16 text-center">
                    <p className="text-lg text-gray-300">Don't see your town listed?</p>
                    <p className="mt-2 text-gray-400">Contact us today to see if we can bring our expertise to your project.</p>
                </div>

            </div>
        </div>
    );
};

export default Locations;
