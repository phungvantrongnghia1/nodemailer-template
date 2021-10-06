import { ConfigService } from '../../infrastructure/ConfigService.provider';
import { PrismaService } from '../../infrastructure/PrismaService.provider';
import { UserCreatePayload } from './UserCreatePayload';
export declare class UserCreateService {
    private prismaService;
    private configService;
    constructor(prismaService: PrismaService, configService: ConfigService);
    execute(payload: UserCreatePayload): Promise<import(".prisma/client").User>;
}
