import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, flask, Factory } from 'lucide-react';
import SEO from './SEO';

const Contact: React.FC = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Chemizol Additives Pvt Ltd - Global Technology Centre",
    "image": "https://www.chemizol.com/logo.jpg",
    "@id": "https://www.chemizol.com",
    "url": "https://www.chemizol.com/contact",
    "telephone": "+919866689645",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 19 E&F, Bidadi Industrial Area 2nd Phase, Sector - I, Talakuppe Village",
      "addressLocality": "Bidadi Hobli, Ramanagara Dist",
      "postalCode": "562109",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.7850,
      "longitude": 77.4150
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Contact Global Technology Centre" 
        description="Contact Chemizol Additives Global Technology Centre in Bidadi. Direct access to formulation chemists for technical support and sales inquiries."
        schema={contactSchema}
      />
      
      {/* Header */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Global Technology Centre
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
            We separate commercial inquiries from technical challenges to ensure you speak to the right expert, faster.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Triage Section */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Technical Support Card */}
            <div className="bg-white rounded-lg shadow-sm border border-l-4 border-l-primary-600 border-slate-200 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-50 rounded-lg p-3">
                  <Factory className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-6">
                  <h2 className="text-xl font-bold text-slate-900">Formulation & R&D Support</h2>
                  <p className="mt-2 text-slate-600">
                    For existing blenders facing performance issues, TBN retention challenges, or needing validation testing.
                  </p>
                  <div className="mt-6 flex items-center space-x-4">
                    <a href="mailto:info@knchemizol.com" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
                      <Mail className="h-4 w-4 mr-2" /> Email Technical Team
                    </a>
                    <span className="text-sm text-slate-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" /> 4hr Response Time
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Card */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-100 rounded-lg p-3">
                  <MessageSquare className="h-6 w-6 text-slate-600" />
                </div>
                <div className="ml-6">
                  <h2 className="text-xl font-bold text-slate-900">Sales & Samples</h2>
                  <p className="mt-2 text-slate-600">
                    For bulk pricing, distributor inquiries, or requesting standard sample kits (1L - 20L).
                  </p>
                  <div className="mt-6 flex items-center space-x-4">
                    <a href="mailto:info@knchemizol.com" className="inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50">
                      <Mail className="h-4 w-4 mr-2" /> Contact Sales
                    </a>
                    <span className="text-sm text-slate-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" /> 24hr Response Time
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar: Physical Location (Ground Reality) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Operations Center</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-slate-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Chemizol Additives Pvt Ltd</p>
                    <p className="text-sm font-medium text-primary-600">Global Technology Centre</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Plot No. 19 E&F,<br />
                      Bidadi Industrial Area 2nd Phase,<br />
                      Sector - I, Talakuppe Village,<br />
                      Bidadi Hobli, Ramanagara Dist,<br />
                      Karnataka, India - 562 109
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" />
                  <p className="text-sm text-slate-600">+91 98666 89645</p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" />
                  <p className="text-sm text-slate-600">info@knchemizol.com</p>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-600">Mon-Fri: 09:00 - 18:00 IST</p>
                    <p className="text-sm text-slate-600">Sat: 09:00 - 13:00 IST</p>
                  </div>
                </div>
              </div>

              {/* Static Map Placeholder */}
              <div className="mt-6 bg-slate-100 rounded-lg h-48 flex items-center justify-center border border-slate-200">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Plot+No.+19+E%26F,+Bidadi+Industrial+Area+2nd+Phase,+Sector+-+I,+Talakuppe+Village,+Bidadi+Hobli,+Ramanagara+Dist,+Karnataka+562109" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 font-medium hover:underline text-sm flex items-center"
                >
                  <MapPin className="h-4 w-4 mr-1" /> View on Google Maps
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;