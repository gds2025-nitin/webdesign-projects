import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}