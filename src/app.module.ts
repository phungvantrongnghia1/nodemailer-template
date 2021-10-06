import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './Users/users.module';
import { AuthService } from './Auth/auth.service';
import { AuthModule } from './Auth/auth.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { PostModule } from './Post/post.module';

@Module({
  imports: [UsersModule, AuthModule, InfrastructureModule, PostModule],
  controllers: [AppController],
  providers: [AuthService],
})
export class AppModule {}
