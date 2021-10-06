import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailAlreadyExistException extends HttpException {
  constructor(debugMessage: string) {
    super(
      {
        statusCode: HttpStatus.CONFLICT,
        message: debugMessage,
      },
      HttpStatus.CONFLICT,
    );
  }
}
