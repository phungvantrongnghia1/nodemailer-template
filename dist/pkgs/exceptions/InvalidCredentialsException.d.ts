import { HttpException } from '@nestjs/common';
export declare class InvalidCredentialsException extends HttpException {
    constructor(debugMessage: string);
}
