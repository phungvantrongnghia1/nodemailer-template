import { ConfigService } from '../../infrastructure/ConfigService.provider';
import { PrismaService } from '../../infrastructure/PrismaService.provider';
import { RequestContext } from '../../pkgs/AppRequest';
import { PostCreatePayload } from './PostCreatePayload';
export declare class PostCreateService {
    private prismaService;
    private configService;
    constructor(prismaService: PrismaService, configService: ConfigService);
    execute(context: RequestContext, payload: PostCreatePayload): Promise<import(".prisma/client").Post>;
}
