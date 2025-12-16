import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TrendingUp, FlaskConical, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://picsum.photos/1920/1080?grayscale"
            alt="Chemical Laboratory"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
              Formulate with Confidence.<br />
              <span className="text-primary-400">Validate with Precision.</span>
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mb-8">
              Bridge the gap between generic additives and region-specific performance. 
              We provide transparent lab verification and custom formulation support for independent blenders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:text-lg">
                Find Additives
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/lab" className="inline-flex justify-center items-center px-6 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-200 bg-slate-800/50 hover:bg-slate-800 md:text-lg backdrop-blur-sm">
                View Lab Status
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Value Pillars */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Why KN Chemizol</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Transparent Quality, Regional Focus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FlaskConical className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Lab Capabilities</h3>
              <p className="text-slate-600">
                Stop guessing. View our real-time equipment status dashboard. We only claim what we can verify today with calibrated instruments.
              </p>
              <Link to="/lab" className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Check Availability <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Regional Compliance</h3>
              <p className="text-slate-600">
                Formulations optimized for specific regional regulations (APAC, India, Middle East) rather than generic global standards.
              </p>
              <Link to="/resources" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                View Compliance Guides <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Partnership</h3>
              <p className="text-slate-600">
                Direct access to formulation engineers. Use our interactive wizard to jumpstart your R&D process.
              </p>
              <Link to="/tools" className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                Start Formulating <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to optimize your blend?</span>
            <span className="block text-primary-200">Get a technical consultation today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/tools" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50">
                Open Formulation Tool
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-800 hover:bg-primary-900">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;