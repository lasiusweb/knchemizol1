import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Beaker, FileText, Settings, Activity, Phone, Truck, Anchor, Wrench, Globe, Users, Shield } from 'lucide-react';

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

// ScrollToTop Utility Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// MegaMenu Navbar
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 bg-primary-600 rounded-md flex items-center justify-center mr-3">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-slate-800 leading-none">KN Chemizol</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest mt-0.5">Additives</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop MegaMenu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            
            <Link to="/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600">Home</Link>
            
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600">About Us</Link>

            {/* Products MegaMenu Trigger */}
            <div 
              className="group relative"
              onMouseEnter={() => setActiveMenu('products')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 focus:outline-none">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* MegaMenu Dropdown */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-4xl bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out z-50 px-8 py-8 ${activeMenu === 'products' ? 'block' : 'hidden'}`}>
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">By Application</h3>
                    <ul className="space-y-3">
                      <li><Link to="/products?app=Engine%20Oil" className="text-slate-600 hover:text-primary-600 block text-sm">Engine Oils (PCMO/HDEO)</Link></li>
                      <li><Link to="/products?app=Gear%20Oil" className="text-slate-600 hover:text-primary-600 block text-sm">Automotive Gear Oils</Link></li>
                      <li><Link to="/products?app=Hydraulic%20Fluid" className="text-slate-600 hover:text-primary-600 block text-sm">Hydraulic Fluids</Link></li>
                      <li><Link to="/products?app=Metalworking%20Fluids" className="text-slate-600 hover:text-primary-600 block text-sm">Metalworking Fluids</Link></li>
                      <li><Link to="/products?app=Grease" className="text-slate-600 hover:text-primary-600 block text-sm">Grease Additives</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">By Component</h3>
                    <ul className="space-y-3">
                      <li><Link to="/products" className="text-slate-600 hover:text-primary-600 block text-sm">DI Packages</Link></li>
                      <li><Link to="/products" className="text-slate-600 hover:text-primary-600 block text-sm">Viscosity Index Improvers</Link></li>
                      <li><Link to="/products" className="text-slate-600 hover:text-primary-600 block text-sm">Pour Point Depressants</Link></li>
                      <li><Link to="/products" className="text-slate-600 hover:text-primary-600 block text-sm">TBN Boosters</Link></li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-sm font-bold text-primary-700 mb-2">Featured Product</h3>
                    <p className="text-sm text-slate-600 mb-3">ChemAdd ZDDP-101: The cost-effective standard for heavy duty diesel protection.</p>
                    <Link to="/products" className="text-sm font-medium text-primary-600 hover:underline">View Spec Sheet &rarr;</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Services MegaMenu Trigger */}
            <div 
              className="group relative"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link to="/services" className="flex items-center px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 focus:outline-none">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
               <div className={`absolute left-0 mt-0 w-64 bg-white border border-slate-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out z-50 py-2 ${activeMenu === 'services' ? 'block' : 'hidden'}`}>
                <Link to="/lab" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">
                  <span className="font-semibold block">Analytical Lab</span>
                  <span className="text-xs text-slate-500">Real-time equipment status</span>
                </Link>
                <Link to="/tools" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">
                  <span className="font-semibold block">Formulation Wizard</span>
                  <span className="text-xs text-slate-500">Interactive consulting tool</span>
                </Link>
                <Link to="/services" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600">
                   <span className="font-semibold block">Toll Blending</span>
                   <span className="text-xs text-slate-500">Contract manufacturing</span>
                </Link>
              </div>
            </div>

            <Link to="/industries" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600">Industries</Link>
            <Link to="/resources" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600">Resources</Link>

            <div className="ml-4">
               <Link to="/contact" className="bg-primary-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm">
                Request Quote
              </Link>
            </div>
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
        <div className="md:hidden bg-white border-b border-slate-200 max-h-[80vh] overflow-y-auto">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" onClick={closeMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">Home</Link>
            <Link to="/about" onClick={closeMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">About Us</Link>
            
            <div className="bg-slate-50 py-2">
              <span className="block px-4 text-xs font-semibold text-slate-500 uppercase">Products</span>
              <Link to="/products?app=Engine%20Oil" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600">Engine Oils</Link>
              <Link to="/products?app=Hydraulic%20Fluid" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600">Hydraulic Fluids</Link>
              <Link to="/products" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600 font-medium text-primary-600">View All Products</Link>
            </div>

            <div className="bg-slate-50 py-2 border-t border-slate-100">
              <span className="block px-4 text-xs font-semibold text-slate-500 uppercase">Services</span>
              <Link to="/lab" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600">Analytical Lab</Link>
              <Link to="/tools" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600">Formulation Tool</Link>
              <Link to="/services" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600">All Services</Link>
            </div>

            <Link to="/industries" onClick={closeMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">Industries</Link>
            <Link to="/resources" onClick={closeMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">Resources</Link>
            
            <div className="p-4">
              <Link to="/contact" onClick={closeMenu} className="block w-full text-center bg-primary-600 text-white px-4 py-3 rounded-md text-base font-medium hover:bg-primary-700 shadow-sm">
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
              Providing advanced additive solutions and technical formulation support for the lubricant industry since 1980.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/products?app=Engine%20Oil" className="text-slate-400 hover:text-white text-sm">Engine Oils</Link></li>
              <li><Link to="/products?app=Hydraulic%20Fluid" className="text-slate-400 hover:text-white text-sm">Industrial Fluids</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm">Custom Formulation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/lab" className="text-slate-400 hover:text-white text-sm">Lab Capabilities</Link></li>
              <li><Link to="/resources" className="text-slate-400 hover:text-white text-sm">TDS & MSDS</Link></li>
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