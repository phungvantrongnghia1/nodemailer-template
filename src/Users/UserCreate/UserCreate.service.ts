import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../infrastructure/ConfigService.provider';
import { PrismaService } from '../../infrastructure/PrismaService.provider';
import { EmailAlreadyExistException } from '../../pkgs/exceptions/EmailAlreadyExistException';
import { hashAndValidatePassword, hashPassword } from '../hashUser';
import { UserCreatePayload } from './UserCreatePayload';
@Injectable()
export class UserCreateService {
  constructor(
    private prismaService: PrismaService,
    private configService: ConfigService,
  ) {}
  async execute(payload: UserCreatePayload) {
    const hasUserExist = await this.prismaService.user.findUnique({
      where: {
        email: payload.email,
      },
    });
    if (hasUserExist) {
      throw new EmailAlreadyExistException(
        'This email address is already being used',
      );
    }
    const passwordDecode = await hashPassword(
      payload.email,
      payload.password,
      this.configService.secretJwt,
    );
    const passwordHash = await hashAndValidatePassword(
      passwordDecode,
      this.configService.saltRounds,
    );
    const inputCreate = {
      ...payload,
      createAt: new Date(),
      password: passwordHash,
    };
    return this.prismaService.user.create({
      data: inputCreate,
    });
  }
}
