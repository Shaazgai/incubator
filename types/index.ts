// Type definitions for the application

export type InvestorType = {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  email: string;
  phone?: string;
  bio: string;
  interests: string[];
  investmentStages: ('Pre-seed' | 'Seed' | 'Series A' | 'Series B' | 'Growth')[];
  portfolioCompanies: {
    name: string;
    logo?: string;
    description: string;
  }[];
  minInvestment: number;
  maxInvestment: number;
  location: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
};

export type MentorType = {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  email: string;
  phone?: string;
  bio: string;
  expertise: string[];
  experience: number; // in years
  hourlyRate: number;
  languages: ('Mongolian' | 'English' | 'Russian' | 'Chinese' | 'Korean')[];
  availability: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  rating: number; // out of 5
  reviewCount: number;
  location: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
};