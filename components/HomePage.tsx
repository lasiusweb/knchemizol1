import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, FlaskConical, Users, Search, Settings, Truck, Wrench, BarChart3, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
            alt="Chemical Laboratory Glassware"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-900/50 border border-primary-500/30 text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
              Operational Status: Bidadi Plant Online
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Precision Chemistry for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-300">Independent Blenders</span>
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              We bridge the gap between global additive technology and regional manufacturing needs. 
              Get formulated performance packages with <span className="text-white font-semibold">transparent lab validation</span> and India-specific compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary-600 hover:bg-primary-700 md:text-lg shadow-lg shadow-primary-900/20 transition-all hover:translate-y-[-2px]">
                Find Additives
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/lab" className="inline-flex justify-center items-center px-8 py-4 border border-slate-600 text-base font-bold rounded-lg text-slate-200 bg-slate-800/40 hover:bg-slate-700/60 md:text-lg backdrop-blur-md transition-all">
                <FlaskConical className="mr-2 h-5 w-5" />
                View Lab Status
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Stats Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-3xl font-bold text-slate-900 mr-3">40+</div>
              <div className="text-sm text-slate-500 font-medium leading-tight">Years of<br/>Expertise</div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-3xl font-bold text-slate-900 mr-3">ISO</div>
              <div className="text-sm text-slate-500 font-medium leading-tight">9001:2015<br/>Certified</div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-3xl font-bold text-slate-900 mr-3">12</div>
              <div className="text-sm text-slate-500 font-medium leading-tight">Operational<br/>Lab Instruments</div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-3xl font-bold text-slate-900 mr-3">50+</div>
              <div className="text-sm text-slate-500 font-medium leading-tight">Active<br/>Formulations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Solution Pathways */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">The Chemizol Advantage</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Tools Built for the Modern Formulator
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              We've digitized our technical expertise. Access the resources you need to formulate faster and more accurately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Tool 1: Lab */}
            <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300">
              <div className="h-2 bg-blue-500 w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-8">
                <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <BarChart3 className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Lab Dashboard</h3>
                <p className="text-slate-600 mb-6">
                  Don't rely on claims. Verify our capability. View real-time status of our Viscometers, CCS, and ICP-OES equipment.
                </p>
                <Link to="/lab" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  Check Instrument Availability <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Tool 2: Product Finder */}
            <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300">
              <div className="h-2 bg-primary-500 w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-8">
                <div className="h-14 w-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <Search className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Product Finder</h3>
                <p className="text-slate-600 mb-6">
                  Filter our catalog by application, chemistry, or treat rate. Compare up to 3 additive packages side-by-side.
                </p>
                <Link to="/products" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                  Search Catalog <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Tool 3: Wizard */}
            <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300">
              <div className="h-2 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-8">
                <div className="h-14 w-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Settings className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Formulation Wizard</h3>
                <p className="text-slate-600 mb-6">
                  Input your base oil and performance target (API/ACEA). Our algorithm suggests the optimal additive package.
                </p>
                <Link to="/tools" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                  Launch Wizard <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Segments */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">Industries Served</h2>
                <p className="mt-3 text-lg text-slate-500">Specialized chemistry for every application.</p>
              </div>
              <Link to="/industries" className="hidden md:flex items-center text-primary-600 font-medium hover:text-primary-700">
                View all industries <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Auto */}
              <Link to="/products?app=Engine%20Oil" className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1486262715619-01b80258e0b5?auto=format&fit=crop&q=80" 
                  alt="Automotive Engine" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center text-white mb-2">
                    <Truck className="h-5 w-5 mr-2 text-primary-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-400">Automotive</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Engine Oils</h3>
                  <p className="text-slate-300 text-sm line-clamp-2">PCMO, HDEO, and 4T Motorcycle formulations meeting API SP/CK-4.</p>
                </div>
              </Link>

              {/* Industrial */}
              <Link to="/products?app=Hydraulic%20Fluid" className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                  alt="Industrial Machinery" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center text-white mb-2">
                    <Settings className="h-5 w-5 mr-2 text-primary-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-400">Industrial</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Hydraulics & Gear</h3>
                  <p className="text-slate-300 text-sm line-clamp-2">High-pressure, anti-wear packages for manufacturing and mining.</p>
                </div>
              </Link>

              {/* Metalworking */}
              <Link to="/products?app=Metalworking%20Fluids" className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1565689793081-4244ebeb1742?auto=format&fit=crop&q=80" 
                  alt="Metal Cutting" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center text-white mb-2">
                    <Wrench className="h-5 w-5 mr-2 text-primary-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-400">Metalworking</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Cutting Fluids</h3>
                  <p className="text-slate-300 text-sm line-clamp-2">Emulsifiers and corrosion inhibitors for soluble and neat oils.</p>
                </div>
              </Link>
           </div>

           <div className="mt-8 text-center md:hidden">
              <Link to="/industries" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                View all industries <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
           </div>
        </div>
      </div>

      {/* Value Pillars / "Why Us" */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
                Why Independent Blenders Switch to Chemizol
              </h2>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Regional Formulation Ownership</h3>
                    <p className="mt-2 text-slate-600">
                      Global giants sell "one-size-fits-all". We optimize for <strong>Indian and APAC base oils</strong>, helping you manage costs without sacrificing specs.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Direct Technical Access</h3>
                    <p className="mt-2 text-slate-600">
                      No call centers. Speak directly to formulation chemists who understand your blending equipment and constraints.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-100 text-emerald-600">
                      <FlaskConical className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Radical Transparency</h3>
                    <p className="mt-2 text-slate-600">
                      We share our lab status, calibration dates, and test methods openly. We believe trust is built on data, not brochures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 relative">
               <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl transform rotate-3 opacity-20"></div>
               <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                  <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                     <h3 className="font-bold text-slate-900">Latest Technical Updates</h3>
                     <span className="text-xs font-semibold bg-primary-100 text-primary-800 px-2 py-1 rounded">News</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link to="/resources" className="text-sm font-medium text-slate-900 hover:text-primary-600">Updated BIS Standards for Engine Oils (2024)</Link>
                        <p className="text-xs text-slate-500 mt-1">Compliance guide available for download.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link to="/products" className="text-sm font-medium text-slate-900 hover:text-primary-600">New LSPI-Compliant DI Package Released</Link>
                        <p className="text-xs text-slate-500 mt-1">ChemPak 9100 series for TGDI engines.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <div>
                         <Link to="/lab" className="text-sm font-medium text-slate-900 hover:text-primary-600">Lab Equipment Calibration Completed</Link>
                         <p className="text-xs text-slate-500 mt-1">All certificates updated as of Oct 2023.</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link to="/resources" className="block w-full text-center text-sm font-bold text-primary-600 hover:text-primary-700">
                       Access Technical Library
                    </Link>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">
            Ready to optimize your blend?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Start with our automated tools or talk to an expert today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/tools" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition-colors">
              <Settings className="mr-2 h-5 w-5" />
              Use Formulation Wizard
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 transition-colors">
              <Users className="mr-2 h-5 w-5" />
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;