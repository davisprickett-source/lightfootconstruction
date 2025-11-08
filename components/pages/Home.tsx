import React, { useState } from 'react';
import { HomeIcon, BathroomIcon, KitchenIcon, DeckIcon, GeneralRemodelingIcon, ConstructionManagementIcon } from '../icons/ServiceIcons';
import { DeerLogo } from '../icons/DeerLogo';

interface HomeProps {
    onQuickEstimate: (data: { name: string; email: string; phone: string; service: string; message: string; }) => void;
}

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


const Home: React.FC<HomeProps> = ({ onQuickEstimate }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Basic validation
        if (formData.name && formData.email && formData.message) {
            onQuickEstimate(formData);
        }
    };

    return (
        <>
            <div className="relative min-h-[55vh] lg:min-h-[65vh] text-white">
                <div className="absolute inset-0">
                    <img 
                        src="/images/hero.jpg" 
                        alt="Framing of a new residential house under construction against a clear blue sky"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center p-2 sm:p-4">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Side: Text */}
                        <div className="text-center lg:text-left animate-fade-in-down">
                            <div className="inline-flex items-center gap-5 bg-white/10 border border-white/20 rounded-2xl px-6 py-5 backdrop-blur-md shadow-2xl mb-8">
                                <DeerLogo className="h-20 w-20 drop-shadow-lg" />
                                <div className="text-left leading-tight">
                                    <p className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-wide text-brand-cream">Lightfoot & Lightfoot</p>
                                    <p className="text-lg md:text-2xl font-heading font-semibold uppercase tracking-[0.3em] text-brand-wood">Construction</p>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4 text-brand-cream">
                                Building Your Vision Since 1981
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                                Lightfoot & Lightfoot Construction brings decades of experience to every project in Brownsburg and the greater Indianapolis area.
                            </p>
                        </div>

                        {/* Right Side: Form */}
                        <div className="bg-brand-dark/70 p-8 rounded-lg shadow-2xl backdrop-blur-sm animate-fade-in-up">
                            <h2 className="text-2xl font-bold text-center mb-6 text-brand-cream font-heading">Get a Free Estimate</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="sr-only">Full Name</label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full bg-white/10 border border-gray-600 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-white placeholder-gray-400 p-3 transition" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email Address</label>
                                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full bg-white/10 border border-gray-600 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-white placeholder-gray-400 p-3 transition" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="sr-only">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-white/10 border border-gray-600 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-white placeholder-gray-400 p-3 transition" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="service" className="sr-only">Service of Interest</label>
                                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full bg-white/10 border border-gray-600 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-white placeholder-gray-400 p-3 transition">
                                        <option value="" className="text-gray-800">Select a service of interest</option>
                                        <option className="text-gray-800">Custom Home Building</option>
                                        <option className="text-gray-800">Kitchen Remodeling</option>
                                        <option className="text-gray-800">Bathroom Renovations</option>
                                        <option className="text-gray-800">Decks & Patios</option>
                                        <option className="text-gray-800">General Remodeling</option>
                                        <option className="text-gray-800">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Project Details</label>
                                    <textarea id="message" name="message" rows={3} required value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className="w-full bg-white/10 border border-gray-600 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-white placeholder-gray-400 p-3 transition"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange transition duration-300">
                                        Get a Free Estimate
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
        </>
    );
};

export default Home;
