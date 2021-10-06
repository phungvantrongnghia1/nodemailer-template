import {
  Controller,
  Get,
  Request,
} from '@nestjs/common';
import { MailerService } from '../pkgs/MailerService.provider';
@Controller('post')
export class PostController {
  constructor(
    private mailerService: MailerService,
  ) {
    //
  }
  @Get('sendMail')
  deletePost(
    @Request() req,
  ) {
    return this.mailerService.execute(req);
  }
}
