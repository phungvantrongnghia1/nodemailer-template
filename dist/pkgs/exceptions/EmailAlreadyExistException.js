"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAlreadyExistException = void 0;
const common_1 = require("@nestjs/common");
class EmailAlreadyExistException extends common_1.HttpException {
    constructor(debugMessage) {
        super({
            statusCode: common_1.HttpStatus.CONFLICT,
            message: debugMessage,
        }, common_1.HttpStatus.CONFLICT);
    }
}
exports.EmailAlreadyExistException = EmailAlreadyExistException;
//# sourceMappingURL=EmailAlreadyExistException.js.map