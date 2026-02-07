
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription?: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
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

export interface Area {
  id: string;
  name: string;
  description: string;
  zipCodes: string[];
}

export type View = 'home' | 'how-it-works' | 'services' | 'reviews' | 'faq' | 'area';
