import React, { useState } from 'react';
import { FileText, Download, Lock, ExternalLink } from 'lucide-react';
import { resourcesList } from '../services/mockData';
import { Resource } from '../types';

const Resources: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would submit to an API
      setIsUnlocked(true);
    }
  };

  const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col hover:border-primary-300 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-lg ${resource.type === 'TDS' ? 'bg-blue-100 text-blue-600' : resource.type === 'MSDS' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-600'}`}>
          <FileText className="h-6 w-6" />
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
          {resource.type}
        </span>
      </div>
      <h3 className="text-lg font-medium text-slate-900 mb-2 flex-grow">{resource.title}</h3>
      <div className="text-sm text-slate-500 mb-6 space-y-1">
        <p>Uploaded: {resource.date}</p>
        <p>Size: {resource.size}</p>
      </div>
      
      {resource.gated && !isUnlocked ? (
        <button 
          onClick={() => document.getElementById('unlock-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full flex items-center justify-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50"
        >
          <Lock className="h-4 w-4 mr-2 text-slate-400" /> Unlock Content
        </button>
      ) : (
        <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
          <Download className="h-4 w-4 mr-2" /> Download
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Technical Resource Library</h1>
          <p className="mt-2 text-slate-600">
            Access Technical Data Sheets (TDS), Material Safety Data Sheets (MSDS), and in-depth whitepapers on additive performance.
          </p>
        </div>

        {/* Lead Gen / Gate */}
        {!isUnlocked && (
          <div id="unlock-form" className="bg-primary-700 rounded-xl shadow-lg p-8 mb-12 text-white">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Access Premium Technical Content</h2>
                <p className="text-primary-100">
                  Register once to unlock case studies, whitepapers, and full product specifications.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your professional email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-3 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button type="submit" className="px-6 py-3 bg-white text-primary-700 font-bold rounded-md hover:bg-primary-50 transition-colors">
                    Access Library
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesList.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {/* Regulatory Section */}
        <div className="mt-16 border-t border-slate-200 pt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Regional Compliance Hub</h2>
            <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
              View All Regions <ExternalLink className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">Asia-Pacific (APAC)</h3>
                <p className="text-sm text-slate-500 mb-4">REACH compliance updates and inventory status for 2024.</p>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Check Status &rarr;</a>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">India (BIS)</h3>
                <p className="text-sm text-slate-500 mb-4">Specific guidelines for lubricant additives under new BIS standards.</p>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Read Guidelines &rarr;</a>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-slate-900 mb-2">Middle East / Africa</h3>
                <p className="text-sm text-slate-500 mb-4">Import regulations and conformity assessment requirements.</p>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">View Requirements &rarr;</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resources;