import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthUser, OAuthProfile } from './interfaces/auth-user.interface';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { RegisterDto } from './dto/register.dto';
import { UserDocument } from '../users/schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<AuthUser | null> {
    const user = await this.usersService.findByEmail(email);
    if (!user || !user.password) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    return this.transformUserToAuthUser(user);
  }

  async login(
    user: AuthUser,
  ): Promise<{ access_token: string; user: AuthUser }> {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      userType: user.userType,
      isActive: user.isActive,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async register(
    registerDto: RegisterDto,
  ): Promise<{ access_token: string; user: AuthUser }> {
    // Verificar si el usuario ya existe
    const existingUser = await this.usersService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    // Hash password si es proporcionado
    let hashedPassword: string | undefined;
    if (registerDto.password) {
      hashedPassword = await bcrypt.hash(registerDto.password, 10);
    }

    // Crear usuario
    const userData = {
      ...registerDto,
      password: hashedPassword,
      emailVerified: false,
    };

    const newUser = await this.usersService.create(userData);
    const authUser = this.transformUserToAuthUser(newUser);

    return this.login(authUser);
  }

  async findOrCreateOAuthUser(profile: OAuthProfile): Promise<AuthUser> {
    let user = await this.usersService.findByEmail(profile.email);

    if (!user) {
      // Crear nuevo usuario desde OAuth
      const userData = {
        email: profile.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
        userType: 'programmer' as const, // Default para OAuth
        avatar: profile.avatar,
        emailVerified: true,
        oauthProviders: [
          {
            provider: profile.provider,
            providerId: profile.id,
            email: profile.email,
          },
        ],
      };

      user = await this.usersService.create(userData);
    } else {
      // Agregar proveedor OAuth si no existe
      const hasProvider = user.oauthProviders?.some(
        (p) => p.provider === profile.provider && p.providerId === profile.id,
      );

      if (!hasProvider) {
        const updatedProviders = [
          ...(user.oauthProviders || []),
          {
            provider: profile.provider,
            providerId: profile.id,
            email: profile.email,
          },
        ];

        const updatedUser = await this.usersService.update(
          user._id?.toString() || '',
          {
            oauthProviders: updatedProviders,
          },
        );
        if (updatedUser) {
          user = updatedUser;
        }
      }
    }

    return this.transformUserToAuthUser(user);
  }

  private transformUserToAuthUser(user: UserDocument): AuthUser {
    return {
      id: user._id?.toString() || '',
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      userType: user.userType as 'programmer' | 'company',
      avatar: user.avatar,
      isActive: user.isActive,
      emailVerified: user.emailVerified,
      companyInfo: user.companyInfo,
      programmerInfo: user.programmerInfo,
    };
  }
}
