import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hashPassword, verify } from '../Users/hashUser';
import { InvalidCredentialsException } from '../pkgs/exceptions/InvalidCredentialsException';
import { ConfigService } from '../infrastructure/ConfigService.provider';
import { PrismaService } from '../infrastructure/PrismaService.provider';
type User = {
  id: number;
  email: string;
  name: string;
  createAt: Date;
  roles: string[];
};

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: username,
      },
    });

    if (user) {
      await this.comparePassword(username, password, user.password || '');

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        createAt: user.createAt,
        roles: ['User'],
      };
    }
    return null;
  }

  async login(user: any) {
    console.log('user login:>> ', user);
    return {
      user,
      roles: ['User'],
      access_token: this.jwtService.sign(user),
    };
  }
  private async comparePassword(
    email: string,
    password: string,
    verifyPassword: string,
  ): Promise<void> {
    const passwordHash = await hashPassword(
      email,
      password,
      this.configService.secretJwt,
    );
    const isComparePassword = await verify(passwordHash, verifyPassword);
    if (!isComparePassword) {
      throw new InvalidCredentialsException(
        'Username and password are not correct',
      );
    }
  }
}
