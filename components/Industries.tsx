import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Anchor, Settings, Wrench, Droplet } from 'lucide-react';
import SEO from './SEO';

const Industries: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Industries Served" 
        description="Lubricant additive solutions for Automotive, Industrial, Marine, and Metalworking sectors."
      />

      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Industries We Power
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
            Specialized chemistry for every moving part.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Automotive */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-slate-100 flex items-center justify-center p-8">
              <Truck className="h-24 w-24 text-slate-400" />
            </div>
            <div className="p-8 lg:w-2/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Automotive Lubricants</h2>
              <p className="text-slate-600 mb-6">
                From passenger cars to heavy-duty off-highway equipment, our packages meet the latest API (SP/CK-4) and ACEA specifications. We focus on fuel economy and extended drain intervals.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div>
                    <h4 className="font-semibold text-slate-900">Applications</h4>
                    <ul className="mt-2 text-sm text-slate-500 space-y-1">
                      <li>• PCMO (Passenger Car)</li>
                      <li>• HDEO (Heavy Duty Diesel)</li>
                      <li>• 4T Motorcycle Oils</li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-semibold text-slate-900">Key Additives</h4>
                    <ul className="mt-2 text-sm text-slate-500 space-y-1">
                      <li>• DI Packages</li>
                      <li>• Viscosity Modifiers</li>
                      <li>• TBN Boosters</li>
                    </ul>
                 </div>
              </div>
              <Link to="/products?app=Engine%20Oil" className="text-primary-600 font-medium hover:text-primary-700">
                View Automotive Additives &rarr;
              </Link>
            </div>
          </div>

          {/* Industrial */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-slate-100 flex items-center justify-center p-8">
              <Settings className="h-24 w-24 text-slate-400" />
            </div>
            <div className="p-8 lg:w-2/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Industrial Lubricants</h2>
              <p className="text-slate-600 mb-6">
                Robust formulations for extreme pressure, high temperature, and continuous operation environments. Designed for manufacturing plants, mining, and power generation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div>
                    <h4 className="font-semibold text-slate-900">Applications</h4>
                    <ul className="mt-2 text-sm text-slate-500 space-y-1">
                      <li>• Hydraulic Fluids</li>
                      <li>• Industrial Gear Oils</li>
                      <li>• Turbine Oils</li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-semibold text-slate-900">Key Additives</h4>
                    <ul className="mt-2 text-sm text-slate-500 space-y-1">
                      <li>• AW/EP Agents</li>
                      <li>• Rust & Oxidation Inhibitors</li>
                      <li>• Demulsifiers</li>
                    </ul>
                 </div>
              </div>
              <Link to="/products?app=Hydraulic%20Fluid" className="text-primary-600 font-medium hover:text-primary-700">
                View Industrial Additives &rarr;
              </Link>
            </div>
          </div>

          {/* Metalworking */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-slate-100 flex items-center justify-center p-8">
              <Wrench className="h-24 w-24 text-slate-400" />
            </div>
            <div className="p-8 lg:w-2/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Metalworking Fluids</h2>
              <p className="text-slate-600 mb-6">
                Advanced emulsifiers and corrosion inhibitors for soluble and neat cutting oils. Focusing on biostability and hard water compatibility for the Indian market.
              </p>
              <Link to="/products?app=Metalworking%20Fluids" className="text-primary-600 font-medium hover:text-primary-700">
                View MWF Additives &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Industries;