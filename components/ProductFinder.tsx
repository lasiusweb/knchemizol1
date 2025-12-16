import React, { useState, useEffect } from 'react';
import { Search, Filter, FileText, ChevronRight, CheckSquare, Square, X, BarChart2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { productsList } from '../services/mockData';
import { ProductApplication } from '../types';

const ProductFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApp, setSelectedApp] = useState<string>('All');
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const location = useLocation();

  // Parse URL query params to set initial state
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const appParam = params.get('app');
    if (appParam) {
      // Validate if the param is a valid application or 'All'
      const isValidApp = Object.values(ProductApplication).includes(appParam as ProductApplication);
      if (isValidApp) {
        setSelectedApp(appParam);
      }
    }
  }, [location.search]);

  const applications = ['All', ...Object.values(ProductApplication)];

  const filteredProducts = productsList.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.chemistry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesApp = selectedApp === 'All' || product.applications.includes(selectedApp as ProductApplication);
    return matchesSearch && matchesApp;
  });

  const toggleComparison = (id: string) => {
    if (comparisonList.includes(id)) {
      setComparisonList(prev => prev.filter(item => item !== id));
    } else {
      if (comparisonList.length < 3) {
        setComparisonList(prev => [...prev, id]);
      } else {
        alert("You can only compare up to 3 products at a time.");
      }
    }
  };

  const ComparisonModal = () => {
    const productsToCompare = productsList.filter(p => comparisonList.includes(p.id));

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
              <BarChart2 className="w-6 h-6 mr-2 text-primary-600" />
              Product Comparison
            </h2>
            <button onClick={() => setShowComparison(false)} className="text-slate-400 hover:text-slate-600">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="overflow-auto p-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-slate-100 w-1/4">Feature</th>
                  {productsToCompare.map(p => (
                    <th key={p.id} className="p-4 border-b-2 border-slate-100 w-1/4 bg-slate-50 text-slate-900 font-bold text-lg">
                      {p.name}
                      <div className="text-xs font-normal text-slate-500 mt-1">{p.id}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-semibold text-slate-700">Chemistry</td>
                  {productsToCompare.map(p => (
                    <td key={p.id} className="p-4 text-slate-600">{p.chemistry}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700">Primary App</td>
                  {productsToCompare.map(p => (
                    <td key={p.id} className="p-4 text-slate-600">{p.applications[0]}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700">Typical Treat Rate</td>
                  {productsToCompare.map(p => (
                    <td key={p.id} className="p-4 text-slate-800 font-medium">{p.typicalTreatRate || 'Contact Tech Support'}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700 align-top">Key Benefits</td>
                  {productsToCompare.map(p => (
                    <td key={p.id} className="p-4 align-top">
                      <ul className="list-disc list-outside ml-4 text-sm text-slate-600 space-y-1">
                        {p.benefits.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700">Action</td>
                  {productsToCompare.map(p => (
                    <td key={p.id} className="p-4">
                      <button className="w-full py-2 bg-primary-50 text-primary-700 font-medium rounded hover:bg-primary-100 transition-colors">
                        Request Sample
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Additive Product Finder</h1>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Search our portfolio of performance additives. Select products to compare specifications and treat rates.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8 sticky top-20 z-30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Search */}
            <div className="relative col-span-1 md:col-span-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter */}
            <div className="relative col-span-1">
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
            
            {/* Compare Action */}
            <div className="flex justify-end">
              <button 
                onClick={() => setShowComparison(true)}
                disabled={comparisonList.length < 2}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors ${
                  comparisonList.length >= 2 
                    ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                <BarChart2 className="w-4 h-4 mr-2" />
                Compare ({comparisonList.length})
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const isSelected = comparisonList.includes(product.id);
            return (
              <div key={product.id} className={`bg-white flex flex-col overflow-hidden rounded-lg shadow-sm border transition-all ${isSelected ? 'border-primary-500 ring-1 ring-primary-500' : 'border-slate-200 hover:shadow-md'}`}>
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {product.id}
                    </span>
                    <button 
                      onClick={() => toggleComparison(product.id)}
                      className="text-slate-400 hover:text-primary-600 focus:outline-none"
                      title={isSelected ? "Remove from comparison" : "Add to comparison"}
                    >
                      {isSelected ? <CheckSquare className="w-5 h-5 text-primary-600" /> : <Square className="w-5 h-5" />}
                    </button>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <div className="text-xs text-slate-500 mb-2 uppercase tracking-wide font-semibold">{product.chemistry}</div>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
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
                  <div className="text-sm text-slate-500 truncate max-w-[120px]">
                    {product.applications[0]}
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center">
                    View TDS <FileText className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
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

      {showComparison && <ComparisonModal />}
    </div>
  );
};

export default ProductFinder;