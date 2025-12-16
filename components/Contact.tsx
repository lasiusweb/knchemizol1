
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Factory, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from './SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    productInterest: '',
    inquiryType: 'Sales',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request / API submission
    setTimeout(() => {
      console.log('Lead Captured:', formData);
      setStatus('success');
      // In a real implementation, this would POST to a backend or trigger an EmailJS function
    }, 1500);
  };

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
          
          {/* Main Content Section */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Triage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Technical Support Card */}
              <div className="bg-white rounded-lg shadow-sm border border-l-4 border-l-primary-600 border-slate-200 p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 bg-primary-50 rounded-lg p-2">
                    <Factory className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">R&D Support</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Formulation issues & validation testing.
                    </p>
                  </div>
                </div>
                <a href="mailto:tech@knchemizol.com" className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center">
                  tech@knchemizol.com <MessageSquare className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Sales Card */}
              <div className="bg-white rounded-lg shadow-sm border border-l-4 border-l-slate-600 border-slate-200 p-6">
                 <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 bg-slate-100 rounded-lg p-2">
                    <MessageSquare className="h-5 w-5 text-slate-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-slate-900">Sales & Samples</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Pricing, MOQs & distributor queries.
                    </p>
                  </div>
                </div>
                <a href="mailto:sales@knchemizol.com" className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center">
                  sales@knchemizol.com <MessageSquare className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* B2B Contact Form */}
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                <h3 className="text-lg font-bold text-slate-900">Send us a Message</h3>
                <p className="text-sm text-slate-500">Fill out the form below and we will route it to the relevant department.</p>
              </div>
              
              <div className="p-6">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="mt-3 text-lg font-medium text-slate-900">Inquiry Received</h3>
                    <p className="mt-2 text-slate-500 text-sm">
                      Thank you for contacting KN Chemizol. A member of our {formData.inquiryType} team will respond to <strong>{formData.email}</strong> within 24 hours.
                    </p>
                    <button 
                      onClick={() => {
                        setStatus('idle');
                        setFormData({ ...formData, message: '', productInterest: '' });
                      }}
                      className="mt-6 text-primary-600 hover:text-primary-500 font-medium text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700">Work Email *</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-slate-700">Company Name *</label>
                        <input
                          type="text"
                          name="companyName"
                          id="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Apex Lubricants Ltd"
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700">Inquiry Type *</label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2 bg-white"
                        >
                          <option value="Sales">Sales & Pricing</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Sample Request">Sample Request</option>
                          <option value="Toll Blending">Toll Blending Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="productInterest" className="block text-sm font-medium text-slate-700">Product Interest</label>
                        <input
                          type="text"
                          name="productInterest"
                          id="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          placeholder="e.g. Engine Oil Additives, ZDDP"
                          className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message / Requirements</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2"
                        placeholder="Please describe your volume requirements or technical challenges..."
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors ${
                          status === 'submitting' ? 'bg-primary-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
                        }`}
                      >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Sidebar: Physical Location (Ground Reality) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 sticky top-24">
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
                  <a href="tel:+919866689645" className="text-sm text-slate-600 hover:text-primary-600 hover:underline transition-colors">
                    +91 98666 89645
                  </a>
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
              <div className="mt-6 bg-slate-100 rounded-lg h-48 flex items-center justify-center border border-slate-200 relative overflow-hidden group">
                 {/* Placeholder Image simulating map view */}
                 <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
                    alt="Map Location" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                 />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Plot+No.+19+E%26F,+Bidadi+Industrial+Area+2nd+Phase,+Sector+-+I,+Talakuppe+Village,+Bidadi+Hobli,+Ramanagara+Dist,+Karnataka+562109" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative z-10 bg-white/90 px-4 py-2 rounded-full text-primary-700 font-bold hover:bg-white text-sm flex items-center shadow-sm"
                >
                  <MapPin className="h-4 w-4 mr-1" /> Open Google Maps
                </a>
              </div>
              
              <div className="mt-6 bg-amber-50 border border-amber-100 rounded-md p-4">
                 <div className="flex">
                    <AlertCircle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0" />
                    <p className="text-xs text-amber-800">
                       <strong>Visitor Policy:</strong> Visits to the formulation lab are by appointment only. Please contact sales to schedule a tour.
                    </p>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
