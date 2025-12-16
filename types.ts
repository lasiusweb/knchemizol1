
export enum EquipmentStatus {
  OPERATIONAL = 'Operational',
  CALIBRATION_DUE = 'Calibration Due',
  MAINTENANCE = 'Maintenance',
  OFFLINE = 'Offline'
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  status: EquipmentStatus;
  lastCalibration: string;
  nextCalibration: string;
  accuracy: string;
  certificateUrl?: string; // New field for transparency
}

export enum ProductApplication {
  ENGINE_OIL = 'Engine Oil',
  GEAR_OIL = 'Gear Oil',
  HYDRAULIC_FLUID = 'Hydraulic Fluid',
  METALWORKING = 'Metalworking Fluids',
  GREASE = 'Grease',
  MARINE = 'Marine'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  applications: ProductApplication[];
  chemistry: string;
  benefits: string[];
  pdfUrl?: string;
  typicalTreatRate?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'TDS' | 'MSDS' | 'Whitepaper' | 'Case Study';
  date: string;
  size: string;
  gated: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Automotive' | 'Industrial' | 'Compliance';
}
