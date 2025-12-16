
import { Equipment, EquipmentStatus, Product, ProductApplication, Resource, FAQItem } from '../types';

export const equipmentList: Equipment[] = [
  {
    id: 'EQ-001',
    name: 'ICP-OES Analyzer',
    category: 'Elemental Analysis',
    status: EquipmentStatus.OPERATIONAL,
    lastCalibration: '2023-10-15',
    nextCalibration: '2024-04-15',
    accuracy: '±1 ppm',
    certificateUrl: 'CERT-ICP-2023.pdf'
  },
  {
    id: 'EQ-002',
    name: 'FTIR Spectrometer',
    category: 'Molecular Analysis',
    status: EquipmentStatus.OPERATIONAL,
    lastCalibration: '2023-11-20',
    nextCalibration: '2024-05-20',
    accuracy: '>99.5%',
    certificateUrl: 'CERT-FTIR-2023.pdf'
  },
  {
    id: 'EQ-003',
    name: 'Automatic Viscometer',
    category: 'Physical Properties',
    status: EquipmentStatus.CALIBRATION_DUE,
    lastCalibration: '2023-09-01',
    nextCalibration: '2024-03-01',
    accuracy: '±0.5%'
  },
  {
    id: 'EQ-004',
    name: 'Four-Ball Wear Tester',
    category: 'Tribology',
    status: EquipmentStatus.MAINTENANCE,
    lastCalibration: '2023-08-15',
    nextCalibration: '2024-02-15',
    accuracy: 'N/A'
  },
  {
    id: 'EQ-005',
    name: 'Noack Volatility Tester',
    category: 'Physical Properties',
    status: EquipmentStatus.OPERATIONAL,
    lastCalibration: '2024-01-10',
    nextCalibration: '2024-07-10',
    accuracy: '±0.1%',
    certificateUrl: 'CERT-NOACK-2024.pdf'
  },
  {
    id: 'EQ-006',
    name: 'Mini-Rotary Viscometer (MRV)',
    category: 'Low Temp Properties',
    status: EquipmentStatus.OPERATIONAL,
    lastCalibration: '2023-12-05',
    nextCalibration: '2024-06-05',
    accuracy: '±1%',
    certificateUrl: 'CERT-MRV-2023.pdf'
  },
  {
    id: 'EQ-007',
    name: 'TBN/TAN Titrator',
    category: 'Chemical Analysis',
    status: EquipmentStatus.OPERATIONAL,
    lastCalibration: '2024-02-01',
    nextCalibration: '2024-08-01',
    accuracy: '0.1 mgKOH/g',
    certificateUrl: 'CERT-TITR-2024.pdf'
  },
  {
    id: 'EQ-008',
    name: 'Copper Corrosion Bath',
    category: 'Corrosion',
    status: EquipmentStatus.OFFLINE,
    lastCalibration: '2023-06-01',
    nextCalibration: '2023-12-01',
    accuracy: 'ASTM D130'
  }
];

export const productsList: Product[] = [
  {
    id: 'P-101',
    name: 'ChemAdd ZDDP-101',
    description: 'Primary anti-wear agent for heavy duty diesel engine oils.',
    applications: [ProductApplication.ENGINE_OIL, ProductApplication.HYDRAULIC_FLUID],
    chemistry: 'Zinc Dialkyl Dithiophosphate',
    benefits: ['Excellent wear protection', 'Antioxidant properties', 'Cost-effective'],
    typicalTreatRate: '0.8 - 1.2%'
  },
  {
    id: 'P-205',
    name: 'ChemVisc 500',
    description: 'Shear-stable viscosity index improver (VII) for multi-grade oils.',
    applications: [ProductApplication.ENGINE_OIL, ProductApplication.GEAR_OIL],
    chemistry: 'Olefin Copolymer (OCP)',
    benefits: ['High shear stability', 'Good thickening efficiency', 'Low temperature performance'],
    typicalTreatRate: '5.0 - 12.0%'
  },
  {
    id: 'P-302',
    name: 'ChemClean Detergent',
    description: 'Calcium sulfonate detergent with high TBN reserve.',
    applications: [ProductApplication.ENGINE_OIL, ProductApplication.MARINE],
    chemistry: 'Calcium Sulfonate',
    benefits: ['High TBN retention', 'Excellent rust protection', 'Thermal stability'],
    typicalTreatRate: '1.5 - 3.0%'
  },
  {
    id: 'P-404',
    name: 'ChemGear Extreme',
    description: 'Premium sulfur-phosphorus gear oil package.',
    applications: [ProductApplication.GEAR_OIL],
    chemistry: 'Sulfur-Phosphorus',
    benefits: ['Extreme pressure performance', 'Yellow metal compatibility', 'Thermal stability'],
    typicalTreatRate: '1.8 - 2.5%'
  },
  {
    id: 'P-501',
    name: 'ChemCut Soluble',
    description: 'Emulsifier package for soluble metalworking fluids.',
    applications: [ProductApplication.METALWORKING],
    chemistry: 'Complex Ester',
    benefits: ['Stable emulsion', 'Hard water stability', 'Biostability'],
    typicalTreatRate: '15.0 - 20.0%'
  }
];

export const resourcesList: Resource[] = [
  { id: 'R-001', title: 'Understanding ZDDP Mechanisms in Modern Engines', type: 'Whitepaper', date: '2024-01-15', size: '2.4 MB', gated: true },
  { id: 'R-002', title: 'ChemAdd ZDDP-101 Technical Data Sheet', type: 'TDS', date: '2023-11-10', size: '0.5 MB', gated: false },
  { id: 'R-003', title: 'Case Study: Extending Drain Intervals in Heavy Duty Fleets', type: 'Case Study', date: '2023-12-05', size: '1.8 MB', gated: true },
  { id: 'R-004', title: 'Regulatory Compliance Guide: APAC Region 2024', type: 'Whitepaper', date: '2024-02-20', size: '3.1 MB', gated: true },
  { id: 'R-005', title: 'ChemVisc 500 Safety Data Sheet', type: 'MSDS', date: '2023-10-01', size: '0.3 MB', gated: false },
];

export const faqList: FAQItem[] = [
  // General
  { id: 'FAQ-1', category: 'General', question: 'Do you offer toll blending services for private labels?', answer: 'Yes. Our Bidadi facility has a dedicated toll blending capacity of 1,200 KL/month. We can blend, package, and label under your brand name while ensuring strict IP protection.' },
  { id: 'FAQ-2', category: 'General', question: 'How do you handle small volume orders for SMEs?', answer: 'Unlike global majors, we support MSME blenders. Our Minimum Order Quantity (MOQ) for additives is 200kg (1 drum), and for finished blends, it is 1 KL.' },
  { id: 'FAQ-3', category: 'General', question: 'What is the lead time for delivery within Karnataka and Tamil Nadu?', answer: 'For ex-stock items, we deliver within 24-48 hours in Bangalore and Chennai industrial hubs. Custom formulations typically require 7-10 days.' },
  
  // Compliance
  { id: 'FAQ-4', category: 'Compliance', question: 'Are your additive packages compliant with the latest BIS 2024 standards?', answer: 'Yes. We have updated our ChemPak series to meet IS 13656:2019 and the upcoming 2024 revisions for automotive lubricants.' },
  { id: 'FAQ-5', category: 'Compliance', question: 'Do you provide REACH registration support for exports to Europe?', answer: 'We provide full chemical composition disclosures required for REACH registration if you are exporting finished lubricants to the EU.' },

  // Automotive
  { id: 'FAQ-6', category: 'Automotive', question: 'Can ChemAdd ZDDP-101 be used for API CK-4 formulations?', answer: 'ChemAdd ZDDP-101 is suitable for API CI-4 Plus. For CK-4, we recommend our secondary ZDDP variant (ChemAdd ZDDP-202) which has lower volatility to protect after-treatment systems.' },
  { id: 'FAQ-7', category: 'Automotive', question: 'How do I solve LSPI issues in TGDI engines?', answer: 'Low Speed Pre-Ignition (LSPI) is caused by calcium detergents. We recommend switching to our Magnesium-Calcium hybrid detergent system (ChemClean Mg-Ca) to mitigate LSPI.' },
  { id: 'FAQ-8', category: 'Automotive', question: 'What VII do you recommend for wide-span multi-grade oils like 5W-40?', answer: 'We recommend ChemVisc 600 (Styrene-Isoprene), which offers superior shear stability index (SSI 35) compared to standard OCPs.' },

  // Industrial
  { id: 'FAQ-9', category: 'Industrial', question: 'My hydraulic fluid is failing the Demulsibility test. Why?', answer: 'This is often due to "over-treatment" or contamination. We recommend our ChemHydra 500 package which is optimized for Group II base oils to ensure rapid water separation.' },
  { id: 'FAQ-10', category: 'Industrial', question: 'Do you have ashless anti-wear additives for eco-friendly hydraulic fluids?', answer: 'Yes, we offer ChemAdd AW-Zero, a zinc-free phosphorus-amine chemistry suitable for environmentally sensitive applications.' },
  { id: 'FAQ-11', category: 'Industrial', question: 'Can I use Group I base oil for turbine oils?', answer: 'It is not recommended due to poor oxidation stability. We advise using Group II or III base oils with our ChemTurb series for TOST lives exceeding 10,000 hours.' },

  // Metalworking
  { id: 'FAQ-12', category: 'Industrial', question: 'How do I prevent bacterial growth in soluble cutting oils?', answer: 'Bacterial resistance starts with pH stability. Our ChemCut packages include a robust amine buffer to maintain pH > 9.0, inhibiting bacterial growth.' },
  { id: 'FAQ-13', category: 'Industrial', question: 'What additive helps with hard water stability in India (up to 400ppm)?', answer: 'Our ChemCut 501 emulsifier is specifically designed for Indian hard water conditions, preventing soap formation up to 600ppm hardness.' },
  
  // Logistics
  { id: 'FAQ-14', category: 'General', question: 'Do you offer lab testing for my finished blends?', answer: 'Yes. All active customers get 5 free sample tests per month (Viscosity, TBN, Elements) at our Bidadi lab to verify their production quality.' },
  { id: 'FAQ-15', category: 'General', question: 'Can you match a competitor sample?', answer: 'Yes. Send us 500ml of the competitor product. We will de-formulate it in our lab and provide a cost-effective counter-match using Chemizol additives.' },
];
