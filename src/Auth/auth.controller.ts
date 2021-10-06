import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Response,
} from '@nestjs/common';
import { AppRequest } from '../pkgs/AppRequest';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/JwtAuthGuard.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: AppRequest) {
    const { user, access_token } = await this.authService.login(req.user);
    req.res?.setHeader('accessToken', access_token);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
