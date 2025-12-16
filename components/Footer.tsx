
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

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
              <li><Link to="/products?app=Engine%20Oil" className="text-slate-400 hover:text-white text-sm transition-colors">Engine Oils</Link></li>
              <li><Link to="/products?app=Hydraulic%20Fluid" className="text-slate-400 hover:text-white text-sm transition-colors">Industrial Fluids</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Custom Formulation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/lab" className="text-slate-400 hover:text-white text-sm transition-colors">Lab Capabilities</Link></li>
              <li><Link to="/resources" className="text-slate-400 hover:text-white text-sm transition-colors">TDS & MSDS</Link></li>
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

export default Footer;
