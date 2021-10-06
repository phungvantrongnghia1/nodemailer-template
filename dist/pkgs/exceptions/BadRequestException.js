"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const common_1 = require("@nestjs/common");
class BadRequestException extends common_1.HttpException {
    constructor(debugMessage) {
        super({
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: debugMessage,
        }, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.BadRequestException = BadRequestException;
//# sourceMappingURL=BadRequestException.js.map