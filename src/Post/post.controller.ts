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
import { JwtAuthGuard } from '../Auth/guard/JwtAuthGuard.guard';
import { MailerService } from '../pkgs/MailerService.provider';
import { PostCreateService } from './PostCreate/PostCreate.service';
import { PostCreatePayload } from './PostCreate/PostCreatePayload';
import { PostsGetService } from './PostsGet/PostsGet.service';

@Controller('post')
export class PostController {
  constructor(
    private postCreateService: PostCreateService,
    private postsGetService: PostsGetService,
    private mailerService: MailerService,
  ) {
    //
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createPost(@Request() req, @Body() payload: PostCreatePayload) {
    return this.postCreateService.execute(req, payload);
  }

  @Get()
  getPosts(
    @Request() req,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
    @Query('take', new DefaultValuePipe(10), ParseIntPipe) take: number,
  ) {
    return this.postsGetService.execute(req, page, take);
  }
  @Post(':id')
  deletePost(
    @Request() req,
    @Param('id', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ) {
    return this.mailerService.execute(req);
  }
}
