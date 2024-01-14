import React from 'react';
import HomeSection from './landingPage/HomeSection';
import PatneringCompanies from './landingPage/PatneringCompanies';
import FeatureList from './landingPage/FeatureList';
import Header from './landingPage/Header';
import CTA from './landingPage/CTA';
import Index from './landingPage/Footer';


const LandingPage = () => (

    <div className="w-full h-screen">
        <Header />
        <HomeSection />
        <FeatureList/>
        <PatneringCompanies />
        <CTA />
        <Index/>
        
    </div>

);

export default LandingPage;

