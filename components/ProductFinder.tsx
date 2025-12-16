
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Filter, FileText, ChevronRight, CheckSquare, Square, X, BarChart2, ChevronDown, Sliders } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { productsList } from '../services/mockData';
import { ProductApplication } from '../types';
import SEO from './SEO';

const ProductFinder: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Treat Rate Logic
  const [maxTreatRate, setMaxTreatRate] = useState<number>(20); // Default max
  const filterRef = useRef<HTMLDivElement>(null);

  // Helper: Parse string treat rate (e.g. "0.8 - 1.2%") to number (1.2)
  const parseMaxTreatRate = (rateStr?: string): number => {
    if (!rateStr) return 0;
    const matches = rateStr.match(/(\d+(\.\d+)?)/g);
    if (!matches || matches.length === 0) return 0;
    // Return the highest number found in the string
    return Math.max(...matches.map(Number));
  };

  // Calculate dynamic max range for slider based on actual data
  const absoluteMaxTreatRate = useMemo(() => {
    let max = 0;
    productsList.forEach(p => {
      const val = parseMaxTreatRate(p.typicalTreatRate);
      if (val > max) max = val;
    });
    return Math.ceil(max);
  }, []);

  // Initialize filters from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const appParam = params.get('app');
    if (appParam) {
      const apps = appParam.split(',');
      const validApps = apps.filter(a => Object.values(ProductApplication).includes(a as ProductApplication));
      if (validApps.length > 0) setSelectedApps(validApps);
    }
  }, [location.search]);

  // Handle Click Outside for Filter Dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update URL when filters change
  const updateUrl = (apps: string[]) => {
    const params = new URLSearchParams(location.search);
    if (apps.length > 0) {
      params.set('app', apps.join(','));
    } else {
      params.delete('app');
    }
    navigate({ search: params.toString() }, { replace: true });
  };

  const toggleAppSelection = (app: string) => {
    let newApps;
    if (selectedApps.includes(app)) {
      newApps = selectedApps.filter(a => a !== app);
    } else {
      newApps = [...selectedApps, app];
    }
    setSelectedApps(newApps);
    updateUrl(newApps);
  };

  const filteredProducts = useMemo(() => {
    return productsList.filter(product => {
      // 1. Text Search
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.chemistry.toLowerCase().includes(searchTerm.toLowerCase());
      
      // 2. Application Filter (OR Logic)
      const matchesApp = selectedApps.length === 0 || 
                         product.applications.some(app => selectedApps.includes(app));

      // 3. Treat Rate Filter (Products with max treat rate <= slider value)
      const productRate = parseMaxTreatRate(product.typicalTreatRate);
      // If product has no treat rate, include it, otherwise check range
      const matchesRate = productRate === 0 || productRate <= maxTreatRate;

      return matchesSearch && matchesApp && matchesRate;
    });
  }, [searchTerm, selectedApps, maxTreatRate]);

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

  const applications = Object.values(ProductApplication);

  // Generate Product Schema for Filtered Items
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "numberOfItems": filteredProducts.length,
    "itemListElement": filteredProducts.map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.name,
      "description": product.description,
      "brand": {
        "@type": "Brand",
        "name": "KN Chemizol"
      },
      "category": product.applications[0]
    }))
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
      <SEO 
        title="Additive Product Finder"
        description="Search our portfolio of 50+ lubricant additives. Filter by chemistry and application."
        schema={productSchema}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Additive Product Finder</h1>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Search our portfolio of performance additives. Use filters to narrow down by application and treat rate efficiency.
          </p>
        </div>

        {/* Controls Container */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8 sticky top-20 z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* 1. Search (Span 4) */}
            <div className="lg:col-span-4 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search by name or chemistry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* 2. Multi-Select Application Filter (Span 4) */}
            <div className="lg:col-span-4 relative" ref={filterRef}>
              <button 
                type="button"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full bg-white border border-slate-300 rounded-md py-2.5 px-3 flex items-center justify-between shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <div className="flex items-center truncate">
                   <Filter className="h-4 w-4 text-slate-400 mr-2" />
                   {selectedApps.length === 0 
                     ? "Filter by Application (All)" 
                     : `${selectedApps.length} Application${selectedApps.length > 1 ? 's' : ''} Selected`
                   }
                </div>
                <ChevronDown className="h-4 w-4 text-slate-500" />
              </button>

              {/* Dropdown Panel */}
              {isFilterOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {applications.map((app) => (
                    <div 
                      key={app}
                      onClick={() => toggleAppSelection(app)}
                      className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-primary-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 h-4 w-4 border rounded mr-3 flex items-center justify-center ${selectedApps.includes(app) ? 'bg-primary-600 border-primary-600' : 'border-slate-300'}`}>
                           {selectedApps.includes(app) && <CheckSquare className="h-3 w-3 text-white" />}
                        </div>
                        <span className={`block truncate ${selectedApps.includes(app) ? 'font-semibold text-primary-900' : 'font-normal text-slate-900'}`}>
                          {app}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Treat Rate Slider (Span 3) */}
            <div className="lg:col-span-3">
               <div className="flex justify-between items-center mb-1">
                 <label htmlFor="treatRate" className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Max Treat Rate</label>
                 <span className="text-xs font-bold text-primary-600">{maxTreatRate}%</span>
               </div>
               <input 
                 type="range" 
                 id="treatRate"
                 min="1" 
                 max={absoluteMaxTreatRate} 
                 step="0.5"
                 value={maxTreatRate}
                 onChange={(e) => setMaxTreatRate(Number(e.target.value))}
                 className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
               />
               <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                 <span>0%</span>
                 <span>{absoluteMaxTreatRate}%</span>
               </div>
            </div>
            
            {/* 4. Compare Button (Span 1) */}
            <div className="lg:col-span-1 flex justify-end">
              <button 
                onClick={() => setShowComparison(true)}
                disabled={comparisonList.length < 2}
                className={`p-2.5 rounded-md transition-colors ${
                  comparisonList.length >= 2 
                    ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
                title="Compare Products"
              >
                <BarChart2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedApps.length > 0) && (
            <div className="mt-4 flex flex-wrap gap-2 items-center">
               <span className="text-xs text-slate-500 mr-2">Active Filters:</span>
               {selectedApps.map(app => (
                 <span key={app} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                   {app}
                   <button onClick={() => toggleAppSelection(app)} className="ml-1.5 inline-flex items-center justify-center text-primary-600 hover:text-primary-800 focus:outline-none">
                     <X className="h-3 w-3" />
                   </button>
                 </span>
               ))}
               <button 
                 onClick={() => {setSelectedApps([]); setMaxTreatRate(absoluteMaxTreatRate); setSearchTerm('');}} 
                 className="text-xs text-slate-500 hover:text-red-600 underline ml-2"
               >
                 Clear All
               </button>
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-4 px-1">
          <p className="text-sm text-slate-500">
            Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> results
          </p>
          {comparisonList.length > 0 && (
             <p className="text-sm text-primary-600 font-medium">
               {comparisonList.length} selected for comparison
             </p>
          )}
        </div>

        {/* Results Grid */}
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
                  <div className="flex flex-wrap gap-1">
                    {product.applications.slice(0, 2).map((app, i) => (
                      <span key={i} className="text-xs text-slate-500 bg-slate-200 px-2 py-0.5 rounded">
                        {app}
                      </span>
                    ))}
                    {product.applications.length > 2 && (
                      <span className="text-xs text-slate-500 bg-slate-200 px-2 py-0.5 rounded">+{product.applications.length - 2}</span>
                    )}
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center flex-shrink-0">
                    View TDS <FileText className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-slate-200 border-dashed">
            <Sliders className="mx-auto h-12 w-12 text-slate-300" />
            <h3 className="mt-2 text-sm font-medium text-slate-900">No products match your filters</h3>
            <p className="mt-1 text-sm text-slate-500">Try adjusting the slider or removing application filters.</p>
            <button 
              onClick={() => {setSelectedApps([]); setMaxTreatRate(absoluteMaxTreatRate); setSearchTerm('');}}
              className="mt-6 text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {showComparison && <ComparisonModal />}
    </div>
  );
};

export default ProductFinder;
