import React, { useState } from 'react';
import { Search, Filter, FileText, ChevronRight } from 'lucide-react';
import { productsList } from '../services/mockData';
import { ProductApplication } from '../types';

const ProductFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState<string>('All');

  const applications = ['All', ...Object.values(ProductApplication)];

  const filteredProducts = productsList.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.chemistry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesApp = selectedApp === 'All' || product.applications.includes(selectedApp as ProductApplication);
    return matchesSearch && matchesApp;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Additive Product Finder</h1>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Search our portfolio of performance additives. Filter by application or chemistry to find the exact component for your blend.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative col-span-1 md:col-span-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search by product name or chemistry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-slate-400" />
              </div>
              <select
                className="block w-full pl-10 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                value={selectedApp}
                onChange={(e) => setSelectedApp(e.target.value)}
              >
                {applications.map(app => (
                  <option key={app} value={app}>{app}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white flex flex-col overflow-hidden rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {product.id}
                  </span>
                  <span className="text-xs text-slate-500">{product.chemistry}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Key Benefits</h4>
                  <ul className="list-disc list-inside text-sm text-slate-500">
                    {product.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
                <div className="text-sm text-slate-500">
                  {product.applications[0]}
                </div>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center">
                  View TDS <FileText className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No products found matching your criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedApp('All');}}
              className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFinder;