export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: 'programmer' | 'company';
  avatar?: string;
  isActive: boolean;
  emailVerified: boolean;
  companyInfo?: {
    companyName: string;
    industry: string;
    size: string;
    website?: string;
  };
  programmerInfo?: {
    skills: string[];
    experience: string;
    github?: string;
    portfolio?: string;
  };
}

export interface OAuthProfile {
  provider: string;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}
