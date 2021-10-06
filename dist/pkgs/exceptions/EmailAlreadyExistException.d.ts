import { HttpException } from '@nestjs/common';
export declare class EmailAlreadyExistException extends HttpException {
    constructor(debugMessage: string);
}
