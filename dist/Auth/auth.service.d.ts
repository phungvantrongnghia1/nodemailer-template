import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '../infrastructure/ConfigService.provider';
import { PrismaService } from '../infrastructure/PrismaService.provider';
export declare class AuthService {
    private jwtService;
    private configService;
    private prismaService;
    constructor(jwtService: JwtService, configService: ConfigService, prismaService: PrismaService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        user: any;
        roles: string[];
        access_token: string;
    }>;
    private comparePassword;
}
