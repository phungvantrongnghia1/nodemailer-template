import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { PostModule } from './Post/post.module';

@Module({
  imports: [  InfrastructureModule, PostModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
