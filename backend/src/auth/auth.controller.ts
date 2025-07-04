import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthUser } from './interfaces/auth-user.interface';
import { CurrentUser } from './decorators/current-user.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Public()
  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@CurrentUser() user: AuthUser) {
    return this.authService.login(user);
  }

  @Public()
  @Post('login/email')
  @HttpCode(HttpStatus.OK)
  async loginWithEmail(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@CurrentUser() user: AuthUser) {
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout() {
    return { message: 'Logout successful' };
  }
}
