import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, AlertCircle, RefreshCw } from 'lucide-react';
import { ProductApplication } from '../types';

// Weighted Logic Matrix
interface MatrixProduct {
  id: string;
  name: string;
  description: string;
  application: ProductApplication;
  baseOilScores: Record<string, number>; // Score 0-100 based on solubility/efficacy
  tierScores: Record<string, number>; // Score 0-100 based on capability
  treatRate: string;
}

const productMatrix: MatrixProduct[] = [
  {
    id: 'P-101',
    name: 'ChemAdd ZDDP-101 (Standard)',
    description: 'Cost-effective anti-wear for older engines.',
    application: ProductApplication.ENGINE_OIL,
    baseOilScores: { 'Group I': 100, 'Group II / II+': 80, 'Group III / III+': 50, 'PAO / Synthetic': 30 },
    tierScores: { 'Standard (API SL / CF)': 100, 'Premium (API SN / CK-4)': 40, 'Advanced (API SP / FA-4 / OEM Spec)': 0 },
    treatRate: '0.8 - 1.2%'
  },
  {
    id: 'P-4500',
    name: 'ChemPak 4500 Series (Premium)',
    description: 'Robust DI package for mixed fleets.',
    application: ProductApplication.ENGINE_OIL,
    baseOilScores: { 'Group I': 70, 'Group II / II+': 100, 'Group III / III+': 85, 'PAO / Synthetic': 60 },
    tierScores: { 'Standard (API SL / CF)': 80, 'Premium (API SN / CK-4)': 100, 'Advanced (API SP / FA-4 / OEM Spec)': 50 },
    treatRate: '8.5 - 10.2%'
  },
  {
    id: 'P-9100',
    name: 'PTEC EOA 910 (Advanced)',
    description: 'Low SAPS, LSPI protection for modern GDI engines.',
    application: ProductApplication.ENGINE_OIL,
    baseOilScores: { 'Group I': 0, 'Group II / II+': 80, 'Group III / III+': 100, 'PAO / Synthetic': 100 },
    tierScores: { 'Standard (API SL / CF)': 100, 'Premium (API SN / CK-4)': 100, 'Advanced (API SP / FA-4 / OEM Spec)': 100 },
    treatRate: '11.5 - 13.0%'
  },
  // Add generic fallbacks for other categories to prevent empty states in demo
  {
    id: 'G-200',
    name: 'ChemGear 200',
    description: 'Industrial gear oil package.',
    application: ProductApplication.GEAR_OIL,
    baseOilScores: { 'Group I': 90, 'Group II / II+': 90, 'Group III / III+': 70, 'PAO / Synthetic': 80 },
    tierScores: { 'Standard (API SL / CF)': 100, 'Premium (API SN / CK-4)': 100, 'Advanced (API SP / FA-4 / OEM Spec)': 100 },
    treatRate: '1.5 - 2.5%'
  },
  {
    id: 'H-500',
    name: 'ChemHydra 500',
    description: 'Anti-wear hydraulic fluid package.',
    application: ProductApplication.HYDRAULIC_FLUID,
    baseOilScores: { 'Group I': 95, 'Group II / II+': 95, 'Group III / III+': 80, 'PAO / Synthetic': 70 },
    tierScores: { 'Standard (API SL / CF)': 100, 'Premium (API SN / CK-4)': 100, 'Advanced (API SP / FA-4 / OEM Spec)': 100 },
    treatRate: '0.6 - 0.9%'
  }
];

const FormulationWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    application: '',
    baseOil: '',
    tier: ''
  });
  const [result, setResult] = useState<MatrixProduct | null>(null);

  const handleNext = () => {
    if (step === 3) {
      calculateResult();
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => setStep(prev => prev - 1);

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateResult = () => {
    setIsCalculating(true);
    // Simulate calculation delay for effect
    setTimeout(() => {
      const candidates = productMatrix.filter(p => p.application === formData.application);
      
      // Scoring Algorithm
      const scored = candidates.map(product => {
        const baseOilScore = product.baseOilScores[formData.baseOil] || 50; // Default if not found
        const tierScore = product.tierScores[formData.tier] || 50;
        
        // Weighting: Tier match is critical (60%), Base oil is secondary (40%)
        const totalScore = (tierScore * 0.6) + (baseOilScore * 0.4);
        return { ...product, totalScore };
      });

      // Sort by score descending
      scored.sort((a, b) => b.totalScore - a.totalScore);
      
      setResult(scored[0] || null);
      setIsCalculating(false);
      setStep(4);
    }, 800);
  };

  const renderStep1 = () => (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-xl font-bold text-slate-900">Step 1: Select Application</h2>
      <p className="text-slate-500">What type of lubricant are you formulating?</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[ProductApplication.ENGINE_OIL, ProductApplication.GEAR_OIL, ProductApplication.HYDRAULIC_FLUID, ProductApplication.METALWORKING].map((app) => (
          <button
            key={app}
            onClick={() => updateField('application', app)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              formData.application === app 
                ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200' 
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <span className={`block font-medium ${formData.application === app ? 'text-primary-900' : 'text-slate-900'}`}>
              {app}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-xl font-bold text-slate-900">Step 2: Base Oil Selection</h2>
      <p className="text-slate-500">Which base oil group are you utilizing?</p>
      <div className="space-y-3">
        {['Group I', 'Group II / II+', 'Group III / III+', 'PAO / Synthetic'].map((oil) => (
          <label key={oil} className="flex items-center p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
            <input
              type="radio"
              name="baseOil"
              value={oil}
              checked={formData.baseOil === oil}
              onChange={(e) => updateField('baseOil', e.target.value)}
              className="h-4 w-4 text-primary-600 border-slate-300 focus:ring-primary-500"
            />
            <span className="ml-3 block text-sm font-medium text-slate-900">{oil}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-xl font-bold text-slate-900">Step 3: Performance Tier</h2>
      <p className="text-slate-500">What performance specification must be met?</p>
      <div className="grid grid-cols-1 gap-4">
        {['Standard (API SL / CF)', 'Premium (API SN / CK-4)', 'Advanced (API SP / FA-4 / OEM Spec)'].map((tier) => (
          <button
            key={tier}
            onClick={() => updateField('tier', tier)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              formData.tier === tier 
                ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200' 
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
             <span className={`block font-medium ${formData.tier === tier ? 'text-primary-900' : 'text-slate-900'}`}>
              {tier}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderResults = () => {
    if (!result) return (
       <div className="text-center py-12">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
          <AlertCircle className="h-6 w-6 text-red-600" />
        </div>
        <h3 className="text-lg font-medium text-slate-900">No Direct Match Found</h3>
        <p className="mt-2 text-slate-500">Our automated system couldn't find a perfect match for this specific combination.</p>
        <button 
          onClick={() => {setStep(1); setFormData({application: '', baseOil: '', tier: ''});}}
          className="mt-6 text-primary-600 font-medium hover:underline"
        >
          Try different parameters
        </button>
       </div>
    );

    return (
      <div className="text-center space-y-6 animate-fadeIn">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Algorithm Recommendation</h2>
        <p className="text-slate-600 max-w-lg mx-auto">
          Optimized for <strong>{formData.baseOil}</strong> achieving <strong>{formData.tier}</strong> specs.
        </p>
        
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-lg text-left max-w-lg mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            BEST MATCH
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">{result.name}</h3>
          <p className="text-sm text-slate-500 mb-4">{result.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 p-3 rounded border border-slate-100">
              <span className="block text-xs text-slate-500 uppercase font-semibold">Treat Rate</span>
              <span className="text-slate-900 font-medium">{result.treatRate}</span>
            </div>
            <div className="bg-slate-50 p-3 rounded border border-slate-100">
              <span className="block text-xs text-slate-500 uppercase font-semibold">Base Oil</span>
              <span className="text-slate-900 font-medium">Compatible</span>
            </div>
          </div>

          <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-md font-bold hover:bg-primary-700 transition-colors shadow-sm">
            Request Technical Data Sheet
          </button>
        </div>

        <button 
          onClick={() => {
            setStep(1);
            setFormData({application: '', baseOil: '', tier: ''});
            setResult(null);
          }}
          className="text-slate-500 hover:text-slate-700 font-medium flex items-center justify-center mx-auto"
        >
          <RefreshCw className="h-4 w-4 mr-2" /> Start New Formulation
        </button>
      </div>
    );
  };

  const canProceed = () => {
    if (step === 1) return formData.application !== '';
    if (step === 2) return formData.baseOil !== '';
    if (step === 3) return formData.tier !== '';
    return true;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Formulation Assistant</h1>
          <p className="mt-2 text-slate-600">
            Rapidly identify suitable additive candidates based on your base oil and performance targets.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-slate-200 rounded-full">
            <div 
              className="h-2 bg-primary-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs font-medium text-slate-500">
            <span>Application</span>
            <span>Base Oil</span>
            <span>Performance</span>
            <span>Result</span>
          </div>
        </div>

        {/* Wizard Card */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100 min-h-[500px] flex flex-col">
          <div className="p-8 flex-grow">
            {isCalculating ? (
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                <p className="text-slate-500 font-medium">Analyzing compatibility matrix...</p>
              </div>
            ) : (
              <>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
                {step === 4 && renderResults()}
              </>
            )}
          </div>
          
          {step < 4 && !isCalculating && (
            <div className="bg-slate-50 px-8 py-4 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className={`flex items-center text-sm font-medium ${
                  step === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Back
              </button>
              
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`flex items-center px-6 py-2 rounded-md text-sm font-medium text-white transition-colors ${
                  canProceed() 
                    ? 'bg-primary-600 hover:bg-primary-700 shadow-sm' 
                    : 'bg-slate-300 cursor-not-allowed'
                }`}
              >
                {step === 3 ? 'Calculate Match' : 'Next'} <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          )}
        </div>

        {/* Liability Disclaimer (Required for Technical Strategy) */}
        <div className="mt-6 flex items-start p-4 bg-amber-50 rounded-lg border border-amber-100">
          <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="ml-3 text-sm text-amber-800">
            <strong>Technical Disclaimer:</strong> Recommendations are algorithmically generated based on typical base oil characteristics. Final treat rates must be verified via pilot blend testing at our Bangalore laboratory to ensure BIS/OEM compliance.
          </p>
        </div>

      </div>
    </div>
  );
};

export default FormulationWizard;