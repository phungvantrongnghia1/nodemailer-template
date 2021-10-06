import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { UserController } from './User.controller';
import { UserCreateService } from './UserCreate/UserCreate.service';

@Module({
  imports: [InfrastructureModule],
  providers: [UserCreateService],
  controllers: [UserController],
})
export class UsersModule {}
