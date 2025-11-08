
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="py-20 bg-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="relative">
                           <img 
                                src="/images/about.jpg" 
                                alt="Team of constructors" 
                                className="rounded-lg shadow-2xl object-cover w-full h-full"
                           />
                           <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white p-6 rounded-lg shadow-lg">
                               <p className="text-5xl font-extrabold font-heading">{new Date().getFullYear() - 1981}+</p>
                               <p className="text-lg font-semibold">Years of Experience</p>
                           </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-base text-brand-orange font-semibold tracking-wide uppercase">About Our Company</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold font-heading tracking-tight text-brand-cream sm:text-4xl">
                            A Legacy of Quality Craftsmanship
                        </p>
                        <p className="mt-6 text-lg text-gray-400">
                            Since 1981, Lightfoot & Lightfoot Construction has been a cornerstone of the construction and remodeling industry in Brownsburg and the greater Indianapolis area. As a family-owned and operated business, we bring a personal commitment to every project we undertake.
                        </p>
                        <p className="mt-4 text-lg text-gray-400">
                            Our philosophy is simple: build with integrity, work with passion, and ensure complete client satisfaction. We believe that a successful project is built on a foundation of clear communication, meticulous planning, and expert execution.
                        </p>
                         <p className="mt-4 text-lg text-gray-400">
                           We combine time-honored techniques with modern technology to deliver results that are not only beautiful and functional but also durable and timeless. We are proud of our history and excited to help you build your future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
