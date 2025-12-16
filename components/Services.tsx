import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Settings, Search, Truck, ArrowRight } from 'lucide-react';
import SEO from './SEO';

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Services - Analytical Testing & Formulation" 
        description="Comprehensive technical services for lubricant manufacturers. ISO-certified lab testing, custom formulation consulting, and toll blending support."
      />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Technical Services</h1>
          <p className="mt-4 text-xl text-slate-500">
            We don't just sell additives; we sell performance assurance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Lab Services */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <FlaskConical className="h-8 w-8" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-slate-900">Analytical Laboratory</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Our Bidadi facility houses a fully equipped analytical center. We offer testing services for used oil analysis, raw material verification, and finished blend quality control.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Kinematic Viscosity (40°C & 100°C)
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> TBN & TAN Analysis
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Elemental Analysis (ICP-OES)
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span> Cold Cranking Simulator (CCS)
                </li>
              </ul>
              <Link to="/lab" className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                View Operational Status
              </Link>
            </div>
          </div>

          {/* Formulation Services */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg text-green-600">
                  <Settings className="h-8 w-8" />
                </div>
                <h3 className="ml-4 text-2xl font-bold text-slate-900">Custom Formulation</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Struggling with a specific spec? Our formulation engineers help you match performance targets using your specific base oils to optimize costs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Base Oil Compatibility Testing
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Cost-Optimization Consultations
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span> OEM Approval Support
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Claims Verification
                </li>
              </ul>
              <Link to="/tools" className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                Launch Formulation Wizard
              </Link>
            </div>
          </div>

        </div>

        {/* Secondary Services */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <Search className="h-8 w-8 text-slate-400 mb-4" />
            <h4 className="text-lg font-bold text-slate-900">Competitor Product Matching</h4>
            <p className="mt-2 text-sm text-slate-500">
              Submit a competitor's sample. We deconstruct it and provide a counter-formulation with KN Chemizol additives.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <Truck className="h-8 w-8 text-slate-400 mb-4" />
            <h4 className="text-lg font-bold text-slate-900">Supply Chain Management</h4>
            <p className="mt-2 text-sm text-slate-500">
              Just-in-time delivery for Bangalore and Chennai hubs. Reduced inventory costs for local blenders.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
             <ArrowRight className="h-8 w-8 text-slate-400 mb-4" />
             <h4 className="text-lg font-bold text-slate-900">Toll Blending</h4>
             <p className="mt-2 text-sm text-slate-500">
               Capacity available for contract manufacturing of specialized additive packages under your private label.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;