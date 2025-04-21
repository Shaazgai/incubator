export type UserRole = 'startup' | 'investor' | 'mentor' | 'admin';

export type Language = 'en' | 'mn';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
}

export interface Profile {
  id: string;
  userId: string;
  companyName?: string;
  position?: string;
  bio?: string;
  sector?: string[];
  location?: string;
  website?: string;
  linkedIn?: string;
  pitchDeckUrl?: string;
  fundingStage?: string;
  fundingAmount?: number;
  investmentInterests?: string[];
  mentorSkills?: string[];
  mentorRate?: number;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Startup {
  id: string;
  userId: string;
  name: string;
  logo?: string;
  description: string;
  sector: string[];
  location: string;
  fundingStage: string;
  fundingAmount?: number;
  website?: string;
  pitchDeckUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MentorSession {
  id: string;
  mentorId: string;
  startupId?: string;
  title: string;
  description?: string;
  date: string;
  duration: number;
  status: 'pending' | 'approved' | 'completed' | 'cancelled';
  price: number;
  createdAt: string;
}

export interface InvestmentRequest {
  id: string;
  startupId: string;
  investorId?: string;
  amount: number;
  description: string;
  pitchDeckUrl?: string;
  status: 'pending' | 'approved' | 'rejected' | 'in_progress';
  createdAt: string;
  updatedAt: string;
}

export interface Sector {
  id: string;
  name: string;
  nameEn: string;
  nameMn: string;
}

export interface FundingStage {
  id: string;
  name: string;
  nameEn: string;
  nameMn: string;
}