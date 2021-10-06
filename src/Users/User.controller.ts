import {
  Controller,
  Request,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserCreateService } from './UserCreate/UserCreate.service';
import { UserCreatePayload } from './UserCreate/UserCreatePayload';

@Controller('users')
export class UserController {
  constructor(private userCreateService: UserCreateService) {
    //
  }
  @Post('registry')
  @UsePipes(new ValidationPipe({ transform: true }))
  async login(@Request() req, @Body() payload: UserCreatePayload) {
    return this.userCreateService.execute(payload);
  }
}
