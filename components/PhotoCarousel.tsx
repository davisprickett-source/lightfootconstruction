
import React, { useState, useEffect, useCallback } from 'react';

const images = [
    'https://picsum.photos/1200/800?random=1',
    'https://picsum.photos/1200/800?random=2',
    'https://picsum.photos/1200/800?random=3',
    'https://picsum.photos/1200/800?random=4',
];

const PhotoCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, []);
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative h-full w-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        <img src={src} alt={`Construction project ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/30 text-white p-3 rounded-full hover:bg-brand-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/30 text-white p-3 rounded-full hover:bg-brand-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {images.map((_, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-brand-orange' : 'bg-white/50 hover:bg-white/80'}`}></button>
                ))}
            </div>
        </div>
    );
};

export default PhotoCarousel;
