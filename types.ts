import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface DiagnosisResponse {
  summary: string;
  urgency: 'Low' | 'Medium' | 'High' | 'Critical';
  potentialCauses: string[];
  diyTips: string[];
  recommendation: string;
}

export enum UrgencyColor {
  Low = 'bg-green-100 text-green-800',
  Medium = 'bg-yellow-100 text-yellow-800',
  High = 'bg-orange-100 text-orange-800',
  Critical = 'bg-red-100 text-red-800',
}