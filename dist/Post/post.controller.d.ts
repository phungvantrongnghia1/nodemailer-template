import { MailerService } from '../pkgs/MailerService.provider';
import { PostCreateService } from './PostCreate/PostCreate.service';
import { PostCreatePayload } from './PostCreate/PostCreatePayload';
import { PostsGetService } from './PostsGet/PostsGet.service';
export declare class PostController {
    private postCreateService;
    private postsGetService;
    private mailerService;
    constructor(postCreateService: PostCreateService, postsGetService: PostsGetService, mailerService: MailerService);
    createPost(req: any, payload: PostCreatePayload): Promise<import(".prisma/client").Post>;
    getPosts(req: any, page: number, take: number): Promise<{
        posts: (import(".prisma/client").Post & {
            comment: import(".prisma/client").Comment[];
            emoji: import(".prisma/client").Emoji[];
        })[];
        currentPage: number;
        size: number;
        total: number;
    }>;
    deletePost(req: any, page: number): Promise<void>;
}
