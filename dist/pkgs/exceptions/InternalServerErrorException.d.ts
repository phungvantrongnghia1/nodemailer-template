import { HttpException } from '@nestjs/common';
export declare class InternalServerErrorException extends HttpException {
    constructor(debugMessage: string);
}
