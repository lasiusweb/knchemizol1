
import { Equipment, EquipmentStatus, Product, ProductApplication, Resource } from '../types';

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
