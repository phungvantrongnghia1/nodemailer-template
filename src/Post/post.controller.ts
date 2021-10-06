import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Request,
  Param,
  ParseIntPipe,
  DefaultValuePipe,
  Query,
  Delete,
} from '@nestjs/common';
import { MailerService } from '../pkgs/MailerService.provider';

@Controller('post')
export class PostController {
  constructor(
    private mailerService: MailerService,
  ) {
    //
  }
  @Get('sendmail')
  deletePost(
    @Request() req,
    @Param('id', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ) {
    return this.mailerService.execute(req);
  }
}
