import { HttpException } from '@nestjs/common';
export declare class BadRequestException extends HttpException {
    constructor(debugMessage: string);
}
