import React from 'react';
import { Shield, Users, Globe, Target, MapPin, Award } from 'lucide-react';
import SEO from './SEO';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="About Us - KN Chemizol" 
        description="Since 1980, KN Chemizol has been a trusted partner for independent lubricant blenders in India and APAC. Learn about our Bidadi facility and transparency mission."
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80"
            alt="Chemical Plant Structure"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Chemistry. Your Advantage.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300">
            Bridging the gap between global additive technology and regional blender needs since 1980.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Our Mission</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Transparency in Formulation
              </p>
              <p className="mt-4 text-lg text-slate-500">
                The additive market is often opaque. We believe in radical transparency. That's why we publish our lab equipment status in real-time and provide open access to formulation data. We empower independent blenders to compete with majors.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <p className="ml-4 text-base text-slate-600">
                    <strong>Quality Assurance:</strong> ISO 9001:2015 certified manufacturing facility in Bidadi.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <p className="ml-4 text-base text-slate-600">
                    <strong>Customer Focus:</strong> Dedicated technical support for small-to-mid sized blenders who are often ignored by global giants.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg shadow-xl overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80" 
                 alt="Lab Technicians" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Ground Reality */}
      <div className="bg-primary-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-white">40+</div>
              <div className="mt-2 text-base font-medium text-primary-200">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-white">12</div>
              <div className="mt-2 text-base font-medium text-primary-200">Operational Instruments</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-white">500+</div>
              <div className="mt-2 text-base font-medium text-primary-200">Active Formulations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-white">24h</div>
              <div className="mt-2 text-base font-medium text-primary-200">Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="mx-auto h-12 w-12 text-slate-400" />
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Strategic Location</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Situated in the Bidadi Industrial Area, Karnataka, our Global Technology Centre is strategically positioned to serve the Indian subcontinent and export to APAC and Middle East markets efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;