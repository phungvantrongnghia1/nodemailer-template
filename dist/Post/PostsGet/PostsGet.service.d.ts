import { PrismaService } from '../../infrastructure/PrismaService.provider';
import { RequestContext } from '../../pkgs/AppRequest';
export declare class PostsGetService {
    private prismaService;
    constructor(prismaService: PrismaService);
    execute(context: RequestContext, page: number, take: number): Promise<{
        posts: (import(".prisma/client").Post & {
            comment: import(".prisma/client").Comment[];
            emoji: import(".prisma/client").Emoji[];
        })[];
        currentPage: number;
        size: number;
        total: number;
    }>;
}
