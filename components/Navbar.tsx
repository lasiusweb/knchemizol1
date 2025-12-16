
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Beaker, FileText, Settings, Activity, Phone, Truck, Anchor, Wrench, Globe, Users, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (path: string) => location.pathname.startsWith(path);

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
            
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/') ? 'text-primary-600' : 'text-slate-700 hover:text-primary-600'}`}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary-600' : 'text-slate-700 hover:text-primary-600'}`}
            >
              About Us
            </Link>

            {/* Products MegaMenu Trigger */}
            <div className="group relative">
              <button 
                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors focus:outline-none ${isParentActive('/products') ? 'text-primary-600' : 'text-slate-700 hover:text-primary-600'}`}
              >
                Products <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* MegaMenu Dropdown - CSS Driven for Performance */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-4xl px-4 sm:px-0 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50 pt-4">
                 <div className="bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden ring-1 ring-black ring-opacity-5">
                  <div className="p-8 grid grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">By Application</h3>
                      <ul className="space-y-3">
                        <li><Link to="/products?app=Engine%20Oil" className="text-slate-600 hover:text-primary-600 block text-sm group/link"><span className="group-hover/link:translate-x-1 transition-transform inline-block">Engine Oils (PCMO/HDEO)</span></Link></li>
                        <li><Link to="/products?app=Gear%20Oil" className="text-slate-600 hover:text-primary-600 block text-sm group/link"><span className="group-hover/link:translate-x-1 transition-transform inline-block">Automotive Gear Oils</span></Link></li>
                        <li><Link to="/products?app=Hydraulic%20Fluid" className="text-slate-600 hover:text-primary-600 block text-sm group/link"><span className="group-hover/link:translate-x-1 transition-transform inline-block">Hydraulic Fluids</span></Link></li>
                        <li><Link to="/products?app=Metalworking%20Fluids" className="text-slate-600 hover:text-primary-600 block text-sm group/link"><span className="group-hover/link:translate-x-1 transition-transform inline-block">Metalworking Fluids</span></Link></li>
                        <li><Link to="/products?app=Grease" className="text-slate-600 hover:text-primary-600 block text-sm group/link"><span className="group-hover/link:translate-x-1 transition-transform inline-block">Grease Additives</span></Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">By Component</h3>
                      <ul className="space-y-3">
                        <li><Link to="/products" className="text-slate-600 hover:text-primary-600 block text-sm group/link"><span className="group-hover/link:translate-x-1 transition-transform inline-block">DI Packages</span></Link></li>
                        <li><Link to="/products" className="text-slate-600 hover:text-primary-600 block text-sm group/link"><span className="group-hover/link:translate-x-1 transition-transform inline-block">Viscosity Index Improvers</span></Link></li>
                        <li><Link to="/products" className="text-slate-600 hover:text-primary-600 block text-sm group/link"><span className="group-hover/link:translate-x-1 transition-transform inline-block">Pour Point Depressants</span></Link></li>
                        <li><Link to="/products" className="text-slate-600 hover:text-primary-600 block text-sm group/link"><span className="group-hover/link:translate-x-1 transition-transform inline-block">TBN Boosters</span></Link></li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-lg flex flex-col justify-center">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">Featured</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">ChemAdd ZDDP-101</h3>
                      <p className="text-sm text-slate-600 mb-4">The cost-effective standard for heavy duty diesel protection. High antioxidant performance.</p>
                      <Link to="/products" className="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center">
                        View Spec Sheet <ChevronDown className="ml-1 h-3 w-3 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                 </div>
              </div>
            </div>

            {/* Services MegaMenu Trigger */}
            <div className="group relative">
              <Link 
                to="/services" 
                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors focus:outline-none ${isActive('/services') ? 'text-primary-600' : 'text-slate-700 hover:text-primary-600'}`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
               <div className="absolute left-0 mt-0 w-72 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50 pt-4">
                 <div className="bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden ring-1 ring-black ring-opacity-5">
                  <div className="py-2">
                    <Link to="/lab" className="group flex items-start px-4 py-4 hover:bg-slate-50 transition-colors">
                      <Activity className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                      <div className="ml-3">
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-primary-700">Analytical Lab</p>
                        <p className="text-xs text-slate-500 mt-1">Real-time equipment status dashboard</p>
                      </div>
                    </Link>
                    <Link to="/tools" className="group flex items-start px-4 py-4 hover:bg-slate-50 transition-colors">
                      <Settings className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                      <div className="ml-3">
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-primary-700">Formulation Wizard</p>
                        <p className="text-xs text-slate-500 mt-1">Interactive product selection tool</p>
                      </div>
                    </Link>
                    <Link to="/services" className="group flex items-start px-4 py-4 hover:bg-slate-50 transition-colors">
                      <Beaker className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                      <div className="ml-3">
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-primary-700">Toll Blending</p>
                        <p className="text-xs text-slate-500 mt-1">Contract manufacturing services</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/industries" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/industries') ? 'text-primary-600' : 'text-slate-700 hover:text-primary-600'}`}
            >
              Industries
            </Link>
            
            <Link 
              to="/resources" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActive('/resources') ? 'text-primary-600' : 'text-slate-700 hover:text-primary-600'}`}
            >
              Resources
            </Link>

            <div className="ml-4 pl-4 border-l border-slate-200">
               <Link to="/contact" className="bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
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
        <div className="md:hidden bg-white border-b border-slate-200 max-h-[80vh] overflow-y-auto shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" onClick={closeMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">Home</Link>
            <Link to="/about" onClick={closeMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">About Us</Link>
            
            <div className="bg-slate-50 py-3">
              <span className="block px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Products</span>
              <Link to="/products?app=Engine%20Oil" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600 hover:text-primary-600">Engine Oils</Link>
              <Link to="/products?app=Hydraulic%20Fluid" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600 hover:text-primary-600">Hydraulic Fluids</Link>
              <Link to="/products" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600 hover:text-primary-600 font-medium mt-1">View All Products &rarr;</Link>
            </div>

            <div className="bg-slate-50 py-3 border-t border-slate-100">
              <span className="block px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Services</span>
              <Link to="/lab" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600 hover:text-primary-600">Analytical Lab</Link>
              <Link to="/tools" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600 hover:text-primary-600">Formulation Tool</Link>
              <Link to="/services" onClick={closeMenu} className="block px-8 py-2 text-sm text-slate-600 hover:text-primary-600">All Services &rarr;</Link>
            </div>

            <Link to="/industries" onClick={closeMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">Industries</Link>
            <Link to="/resources" onClick={closeMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50">Resources</Link>
            
            <div className="p-4 mt-2">
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

export default Navbar;
