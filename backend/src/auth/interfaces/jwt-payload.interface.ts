export interface JwtPayload {
  sub: string; // User ID
  email: string;
  userType: 'programmer' | 'company';
  isActive: boolean;
  iat?: number; // Issued at
  exp?: number; // Expiration time
}
