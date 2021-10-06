import { Module } from '@nestjs/common';
import { ConfigService } from './ConfigService.provider';

@Module({
  imports: [],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService('.env'),
    },
  ],
  exports: [ConfigService],
})
export class InfrastructureModule {}
