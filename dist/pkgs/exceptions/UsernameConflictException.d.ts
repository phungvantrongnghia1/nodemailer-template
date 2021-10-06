import { HttpException } from '@nestjs/common';
export declare class UsernameConflictException extends HttpException {
    constructor(debugMessage: string);
}
