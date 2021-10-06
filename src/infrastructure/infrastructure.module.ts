import { Module } from '@nestjs/common';
import { ConfigService } from './ConfigService.provider';
import { PrismaService } from './PrismaService.provider';

@Module({
  imports: [],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService('.env'),
    },
    PrismaService,
  ],
  exports: [ConfigService, PrismaService],
})
export class InfrastructureModule {}
