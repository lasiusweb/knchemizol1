import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Search } from 'lucide-react';
import { faqList } from '../services/mockData';
import SEO from './SEO';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = ['All', 'General', 'Automotive', 'Industrial', 'Compliance'];

  // Optimize filtering to run only when inputs change
  const filteredFAQs = useMemo(() => {
    return faqList.filter(faq => {
      const matchesCategory = filter === 'All' || faq.category === filter;
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchTerm]);

  // Generate FAQPage Schema dynamically based on filtered results (or all if default)
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": filteredFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }), [filteredFAQs]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Technical FAQ - Lubricant Formulation" 
        description="Frequently asked questions about lubricant formulation, additive selection, and BIS compliance for Indian blenders."
        schema={faqSchema}
      />

      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="mx-auto h-12 w-12 text-primary-400 mb-4" />
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Technical Knowledge Base
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
            Answers to common formulation challenges, regulatory queries, and product applications.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search keywords (e.g., 'LSPI', 'BIS', 'Hydraulic')..." 
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setOpenIndex(null); // Collapse items when searching to reduce noise
                }}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    filter === cat 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div key={faq.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 text-slate-600 bg-slate-50 border-t border-slate-100 transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="prose prose-sm max-w-none">
                    <p>{faq.answer}</p>
                    {faq.category === 'Compliance' && (
                      <p className="mt-2 text-xs text-slate-500 italic">
                        * Note: Regulations subject to change. Consult latest BIS documentation.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-500">
              No questions found matching your search.
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">Can't find what you're looking for?</p>
          <a href="/contact" className="mt-2 inline-flex items-center text-primary-600 font-bold hover:text-primary-700">
            Ask a Chemist Directly &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;