import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../infrastructure/ConfigService.provider';
import { PrismaService } from '../../infrastructure/PrismaService.provider';
import { RequestContext } from '../../pkgs/AppRequest';
import { PostCreatePayload } from './PostCreatePayload';
@Injectable()
export class PostCreateService {
  constructor(
    private prismaService: PrismaService,
    private configService: ConfigService,
  ) {}
  async execute(context: RequestContext, payload: PostCreatePayload) {
    const { user } = context;
    const { tags } = payload;
    const tag = [...tags, 'all'].join(',');
    console.log('tag :>> ', tag);
    return this.prismaService.post.create({
      data: {
        ...payload,
        createAt: new Date(),
        tags: tag,
        userId: user.id,
      },
    });
  }
}
