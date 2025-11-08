import React from 'react';
import { HomeIcon, BathroomIcon, KitchenIcon, DeckIcon, GeneralRemodelingIcon, ConstructionManagementIcon } from '../icons/ServiceIcons';

const services = [
    {
        icon: <HomeIcon className="h-12 w-12 text-brand-orange" />,
        title: 'Custom Home Building',
        description: 'From foundation to finish, we build high-quality custom homes tailored to your dreams and specifications.',
    },
    {
        icon: <KitchenIcon className="h-12 w-12 text-brand-orange" />,
        title: 'Kitchen Remodeling',
        description: 'Transform the heart of your home with our expert kitchen remodeling services, including custom cabinets and countertops.',
    },
    {
        icon: <BathroomIcon className="h-12 w-12 text-brand-orange" />,
        title: 'Bathroom Renovations',
        description: 'Create a spa-like retreat with our complete bathroom renovation solutions, from tiling to fixture installation.',
    },
    {
        icon: <DeckIcon className="h-12 w-12 text-brand-orange" />,
        title: 'Decks & Patios',
        description: 'Expand your living space outdoors with beautifully crafted custom decks, patios, and outdoor kitchens.',
    },
    {
        icon: <GeneralRemodelingIcon className="h-12 w-12 text-brand-orange" />,
        title: 'General Remodeling',
        description: 'We handle all types of home remodeling projects, including basement finishing, additions, and structural changes.',
    },
    {
        icon: <ConstructionManagementIcon className="h-12 w-12 text-brand-orange" />,
        title: 'Construction Management',
        description: 'Leverage our decades of experience to ensure your construction project is managed efficiently, on time, and on budget.',
    }
];

const Services: React.FC = () => {
    return (
        <div className="py-20 bg-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-base text-brand-orange font-semibold tracking-wide uppercase">Our Expertise</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold font-heading tracking-tight text-brand-cream sm:text-4xl">
                        Comprehensive Construction Services
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        We offer a wide range of services to meet your residential and commercial needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-brand-dark-secondary p-8 rounded-lg shadow-lg border border-gray-700 hover:border-brand-orange transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center justify-center h-20 w-20 rounded-md bg-brand-dark mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading text-brand-cream mb-3">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;