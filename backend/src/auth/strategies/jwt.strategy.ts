import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { AuthUser } from '../interfaces/auth-user.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    const jwtSecret = configService.get<string>('jwt.secret');
    if (!jwtSecret) {
      throw new Error('JWT secret is not configured');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: JwtPayload): Promise<AuthUser> {
    const user = await this.usersService.findOne(payload.sub);
    if (!user || !user.isActive) {
      throw new UnauthorizedException('User not found or inactive');
    }

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
