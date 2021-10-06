"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllegalStateException = void 0;
const common_1 = require("@nestjs/common");
class IllegalStateException extends common_1.HttpException {
    constructor(debugMessage) {
        super({
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            message: debugMessage,
        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.IllegalStateException = IllegalStateException;
//# sourceMappingURL=IllegalStateException.js.map