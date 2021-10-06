import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { MailerService } from '../pkgs/MailerService.provider';
import { PostController } from './post.controller';
import { PostCreateService } from './PostCreate/PostCreate.service';
import { PostsGetService } from './PostsGet/PostsGet.service';

@Module({
  imports: [InfrastructureModule],
  providers: [PostCreateService, PostsGetService, MailerService],
  controllers: [PostController],
})
export class PostModule {}
