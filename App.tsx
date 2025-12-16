import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Beaker, FileText, Settings, Activity, Phone } from 'lucide-react';

import HomePage from './components/HomePage';
import LabCapabilities from './components/LabCapabilities';
import ProductFinder from './components/ProductFinder';
import FormulationWizard from './components/FormulationWizard';
import Resources from './components/Resources';
import Contact from './components/Contact';
import SEO from './components/SEO';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Products', path: '/products', icon: Beaker },
    { name: 'Lab Capabilities', path: '/lab', icon: Activity },
    { name: 'Formulation Tools', path: '/tools', icon: Settings },
    { name: 'Technical Resources', path: '/resources', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-primary-600 rounded-md flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">KN Chemizol</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'border-primary-500 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm">
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-primary-50 border-primary-500 text-primary-700'
                    : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'
                }`}
              >
                <div className="flex items-center">
                  <link.icon className="h-4 w-4 mr-2" />
                  {link.name}
                </div>
              </Link>
            ))}
            <div className="pl-3 pr-4 py-2">
              <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 shadow-sm flex justify-center">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-primary-500 rounded-md flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="font-bold text-xl text-slate-100">KN Chemizol</span>
            </div>
            <p className="text-slate-400 text-sm">
              Providing advanced additive solutions and technical formulation support for the lubricant industry.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-slate-400 hover:text-white text-sm">Engine Oils</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white text-sm">Industrial Fluids</Link></li>
              <li><Link to="/tools" className="text-slate-400 hover:text-white text-sm">Custom Formulation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/lab" className="text-slate-400 hover:text-white text-sm">Lab Capabilities</Link></li>
              <li><Link to="/resources" className="text-slate-400 hover:text-white text-sm">TDS & MSDS</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm">Regulatory Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-400 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+919866689645" className="hover:text-white transition-colors">+91 98666 89645</a>
              </li>
              <li className="text-slate-400 text-sm">
                 <a href="mailto:info@knchemizol.com" className="hover:text-white transition-colors">info@knchemizol.com</a>
              </li>
              <li className="text-slate-400 text-sm">
                Plot No. 19 E&F, Bidadi Industrial Area, Karnataka
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 flex justify-between items-center">
          <p className="text-slate-500 text-sm">&copy; 2024 KN Chemizol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
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