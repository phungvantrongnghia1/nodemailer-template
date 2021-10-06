import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { MailerService } from '../pkgs/MailerService.provider';
import { PostController } from './post.controller';

@Module({
  imports: [InfrastructureModule],
  providers: [MailerService],
  controllers: [PostController],
})
export class PostModule {}
