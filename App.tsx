import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Locations from './components/pages/Locations';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

interface EstimateData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
    const [initialContactData, setInitialContactData] = useState<Partial<EstimateData>>({});

    const handleQuickEstimate = (data: EstimateData) => {
        setInitialContactData(data);
        setCurrentPage(Page.Contact);
    };

    const renderPage = () => {
        switch (currentPage) {
            case Page.Home:
                return <Home onQuickEstimate={handleQuickEstimate} />;
            case Page.Services:
                return <Services />;
            case Page.Locations:
                return <Locations />;
            case Page.About:
                return <About />;
            case Page.Contact:
                return <Contact initialData={initialContactData} />;
            default:
                return <Home onQuickEstimate={handleQuickEstimate} />;
        }
    };

    return (
        <div className="bg-brand-dark min-h-screen flex flex-col font-body text-brand-cream">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default App;