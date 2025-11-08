import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from '../icons/ContactIcons';

interface ContactProps {
    initialData?: {
        name?: string;
        email?: string;
        phone?: string;
        service?: string;
        message?: string;
    };
}

const Contact: React.FC<ContactProps> = ({ initialData }) => {
    const [formData, setFormData] = useState({
        name: initialData?.name || '',
        email: initialData?.email || '',
        phone: initialData?.phone || '',
        service: initialData?.service || '',
        message: initialData?.message || '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="py-20 bg-brand-dark-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold font-heading text-brand-cream">Thank You!</h2>
                    <p className="mt-4 text-lg text-gray-300">Your request for a free estimate has been received. We will be in touch with you shortly.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="py-20 bg-brand-dark-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl leading-8 font-extrabold font-heading tracking-tight text-brand-cream sm:text-4xl">
                        Get a Free Estimate
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        Ready to start your project? Fill out the form below or contact us directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-brand-dark p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-brand-dark-secondary border-gray-600 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-white p-3" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-brand-dark-secondary border-gray-600 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-white p-3" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full bg-brand-dark-secondary border-gray-600 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-white p-3" />
                            </div>
                             <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-300">Service of Interest</label>
                                <select id="service" name="service" value={formData.service} onChange={handleChange} className="mt-1 block w-full bg-brand-dark-secondary border-gray-600 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-white p-3">
                                    <option value="">Select a service</option>
                                    <option>Custom Home Building</option>
                                    <option>Kitchen Remodeling</option>
                                    <option>Bathroom Renovations</option>
                                    <option>Decks & Patios</option>
                                    <option>General Remodeling</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Project Details</label>
                                <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-brand-dark-secondary border-gray-600 rounded-md shadow-sm focus:ring-brand-orange focus:border-brand-orange text-white p-3"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange transition duration-300">
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-col justify-center space-y-8">
                         <div className="flex items-start">
                            <MapPinIcon className="flex-shrink-0 h-6 w-6 text-brand-orange" />
                            <div className="ml-4">
                                <h3 className="text-lg leading-6 font-medium text-brand-cream">Our Location</h3>
                                <p className="mt-2 text-base text-gray-400">
                                    Brownsburg, IN<br />
                                    Serving the greater Indianapolis area
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <PhoneIcon className="flex-shrink-0 h-6 w-6 text-brand-orange" />
                            <div className="ml-4">
                                <h3 className="text-lg leading-6 font-medium text-brand-cream">Call Us</h3>
                                <p className="mt-2 text-base text-gray-400 hover:text-brand-orange transition-colors">
                                    <a href="tel:317-679-9131">317-679-9131</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MailIcon className="flex-shrink-0 h-6 w-6 text-brand-orange" />
                            <div className="ml-4">
                                <h3 className="text-lg leading-6 font-medium text-brand-cream">Email Us</h3>
                                <p className="mt-2 text-base text-gray-400 hover:text-brand-orange transition-colors break-all">
                                    <a href="mailto:lightfoot.lightfootconstruction@gmail.com">lightfoot.lightfootconstruction@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;