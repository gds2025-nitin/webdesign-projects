
import React from 'react';
import { Home, Zap, DollarSign, ShieldCheck } from 'lucide-react';
import { Service, Step, Testimonial, Area } from './types';

export interface RecentPurchase {
  id: number;
  neighborhood: string;
  status: string;
  image: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SERVICES: Service[] = [
  {
    id: 'as-is',
    title: 'Sell As-Is',
    description: 'No repairs, no cleaning. We buy your house exactly as it stands today, even with structural issues or hoarding.',
    // Fixed: Escaped single quote in "don't" to prevent string termination
    longDescription: 'We specialize in properties that traditional buyers avoid. Whether your home has structural damage, mold, outdated systems, or is simply filled with unwanted belongings, we take it all. You don\'t even need to pick up a broom.',
    icon: 'Home'
  },
  {
    id: 'speed',
    title: 'Fast Cash Close',
    description: 'Skip the 60-day bank approval process. We can close in as little as 7 days with cash in your pocket.',
    // Fixed: Escaped single quote in "don't" to prevent string termination
    longDescription: 'Traditional sales fail because of financing contingencies. We use our own private capital, meaning we don\'t need bank appraisals or inspections. If you need to move quickly, we are your fastest route to a closing table.',
    icon: 'Zap'
  },
  {
    id: 'no-fees',
    title: 'Zero Commissions',
    description: 'Save 6% on realtor commissions. What we offer is what you get. No hidden fees or closing costs.',
    longDescription: 'The average Philadelphia home seller pays $15,000 - $25,000 in fees. With us, that money stays in your pocket. We cover all title insurance, transfer taxes, and administrative costs associated with the sale.',
    icon: 'DollarSign'
  },
  {
    id: 'probate',
    title: 'Inherited & Probate',
    description: 'Specialized help for heirs and executors navigating the Philadelphia probate court system.',
    longDescription: 'Inheriting a house can be a legal and emotional burden. We work closely with probate attorneys to help you navigate the paperwork, clear out the property, and unlock the cash value of the estate quickly.',
    icon: 'ShieldCheck'
  }
];

export const AREAS: Area[] = [
  { id: 'south-philly', name: 'South Philadelphia', description: 'From the Stadiums to Grad Hospital, we know every rowhome block.', zipCodes: ['19145', '19146', '19147', '19148'] },
  { id: 'fishtown', name: 'Fishtown & Kensington', description: 'Buying in the riverwards for over a decade. Any condition, any block.', zipCodes: ['19125', '19134', '19122'] },
  { id: 'northeast-philly', name: 'Northeast Philadelphia', description: 'Serving the Greater Northeast, from Mayfair to Bustleton.', zipCodes: ['19149', '19152', '19115', '19111'] },
  { id: 'west-philly', name: 'West Philadelphia', description: 'Helping homeowners near UPenn, Drexel, and beyond the 52nd St corridor.', zipCodes: ['19104', '19139', '19143', '19151'] },
  { id: 'north-philly', name: 'North Philadelphia', description: 'Deep roots in Strawberry Mansion, Nicetown, and Temple University area.', zipCodes: ['19121', '19132', '19133', '19140'] },
  { id: 'roxborough', name: 'Roxborough & Manayunk', description: 'Buying single family and multi-family homes in the hills of Philly.', zipCodes: ['19127', '19128'] }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: 1,
    title: 'Request an Offer',
    description: 'Tell us about your property. It takes less than 2 minutes and is 100% confidential.'
  },
  {
    number: 2,
    title: 'Get a Cash Offer',
    description: 'We conduct a brief walkthrough and provide a fair, no-obligation cash offer within 24 hours.'
  },
  {
    number: 3,
    title: 'Pick Your Close Date',
    description: 'If you accept, you choose when we close. We handle all the paperwork and title costs.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Inheriting my father's house in South Philly was overwhelming. It needed so much work. We Buy Houses made the process simple and treated me with respect.",
    author: "Sarah Jenkins",
    role: "Heir",
    company: "South Philadelphia",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    quote: "I was facing foreclosure and needed to move for work. They closed in 8 days and saved my credit. Best decision I could have made.",
    author: "Michael Ross",
    role: "Homeowner",
    company: "Kensington",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    quote: "As a tired landlord, I was done with the eviction headaches. They bought my property with the non-paying tenant still inside. Huge relief.",
    author: "David Chen",
    role: "Property Owner",
    company: "Northeast Philly",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 4,
    quote: "My house was literally falling apart. I didn't think anyone would touch it. They gave me a fair price and took it exactly as it was.",
    author: "Robert Wilson",
    role: "Retired Veteran",
    company: "West Philadelphia",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const RECENT_PURCHASES: RecentPurchase[] = [
  {
    id: 1,
    neighborhood: "Fishtown",
    status: "Purchased As-Is",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    description: "Multi-family property with significant water damage. Closed in 10 days."
  },
  {
    id: 2,
    neighborhood: "Germantown",
    status: "Cash Buyout",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800",
    description: "Historical estate needing complete renovation. Seller avoided probate delays."
  },
  {
    id: 3,
    neighborhood: "South Philly",
    status: "Tenant Occupied",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=800",
    description: "Rowhome purchased with existing non-paying tenants. 100% stress-free."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do you determine the offer price for my house?",
    answer: "We analyze recent sales of similar homes in your neighborhood that have been fully renovated. We then subtract the costs of repairs, marketing, and a small profit margin to arrive at a fair cash offer."
  },
  {
    question: "Are there any fees or commissions to work with you?",
    answer: "None at all. Unlike a traditional realtor who charges 6%, we cover all closing costs and charge zero commissions. The offer we give is the exact amount you walk away with."
  },
  {
    question: "How long does the process take?",
    answer: "Typically, we can have a cash offer in your hands within 24 hours of viewing the property. We can close in as little as 7 days, or on whatever timeline works best for you."
  },
  {
    question: "My house is in terrible condition. Will you still buy it?",
    answer: "Absolutely. We specialize in buying houses that need 'love'. Whether it's structural issues, a hoarder situation, fire damage, or just hasn't been updated in 40 years, we want it."
  },
  {
    question: "What if I have tenants in the property?",
    answer: "That is no problem at all. We buy many properties from tired landlords. We can handle the lease transitions or continue with the current tenants after closing."
  }
];

export const LOGOS = [
  "Better Business Bureau",
  "Chamber of Commerce",
  "Zillow Premier",
  "Forbes Real Estate",
  "Angi Certified",
  "Local Philly First"
];
