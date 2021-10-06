"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameConflictException = void 0;
const common_1 = require("@nestjs/common");
class UsernameConflictException extends common_1.HttpException {
    constructor(debugMessage) {
        super({
            statusCode: common_1.HttpStatus.CONFLICT,
            message: debugMessage,
        }, common_1.HttpStatus.CONFLICT);
    }
}
exports.UsernameConflictException = UsernameConflictException;
//# sourceMappingURL=UsernameConflictException.js.map