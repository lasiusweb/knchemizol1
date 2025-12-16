
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import HomePage from './components/HomePage';
import LabCapabilities from './components/LabCapabilities';
import ProductFinder from './components/ProductFinder';
import FormulationWizard from './components/FormulationWizard';
import Resources from './components/Resources';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Industries from './components/Industries';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ScrollToTop Utility Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Chemizol Additives Pvt Ltd",
    "url": "https://www.chemizol.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919866689645",
      "contactType": "Technical Sales",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 19 E&F, Bidadi Industrial Area 2nd Phase, Sector - I, Talakuppe Village",
      "addressLocality": "Bidadi Hobli, Ramanagara Dist",
      "postalCode": "562109",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "areaServed": "IN",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.7850,
      "longitude": 77.4150
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <SEO 
                  title="Lubricant Additive Manufacturer India"
                  description="Indian manufacturer of lubricant additives & specialty formulations for OEMs and blenders. Technical expertise in PCMO, HDEO, ATF & gear oil additives since 1980s."
                  schema={organizationSchema}
                />
                <HomePage />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/lab" element={
              <>
                <SEO 
                  title="Analytical Lab Capabilities"
                  description="View our real-time equipment capability dashboard. 12 operational instruments with ongoing calibration for lubricant analysis."
                />
                <LabCapabilities />
              </>
            } />
            <Route path="/products" element={
              <>
                <SEO 
                  title="Additive Product Finder"
                  description="Search our portfolio of 50+ lubricant additives. Filter by chemistry and application."
                />
                <ProductFinder />
              </>
            } />
            <Route path="/tools" element={
              <>
                <SEO 
                  title="Formulation Wizard"
                  description="Interactive additive selection tool for lubricant formulators. Match base oils to performance tiers."
                />
                <FormulationWizard />
              </>
            } />
            <Route path="/resources" element={
              <>
                <SEO 
                  title="Technical Resources & TDS"
                  description="Download Technical Data Sheets and Regulatory Compliance guides for India and APAC regions."
                />
                <Resources />
              </>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="p-20 text-center text-slate-500">Page under construction</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
