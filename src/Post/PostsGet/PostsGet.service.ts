import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../infrastructure/PrismaService.provider';
import { RequestContext } from '../../pkgs/AppRequest';
@Injectable()
export class PostsGetService {
  constructor(private prismaService: PrismaService) {}
  async execute(context: RequestContext, page: number, take: number) {
    const posts = await this.prismaService.post.findMany({
      include: {
        comment: {
          take: 10,
        },
        emoji: true,
      },
      take: take,
      skip: page,
      orderBy: {
        createAt: 'desc',
      },
    });
    const postCount = await this.prismaService.post.count();
    return {
      posts,
      currentPage: page,
      size: take,
      total: postCount,
    };
  }
}
