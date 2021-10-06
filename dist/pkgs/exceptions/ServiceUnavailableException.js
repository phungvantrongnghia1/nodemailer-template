"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUnavailableException = void 0;
const common_1 = require("@nestjs/common");
class ServiceUnavailableException extends common_1.HttpException {
    constructor(debugMessage) {
        super({
            statusCode: common_1.HttpStatus.SERVICE_UNAVAILABLE,
            message: debugMessage,
        }, common_1.HttpStatus.SERVICE_UNAVAILABLE);
    }
}
exports.ServiceUnavailableException = ServiceUnavailableException;
//# sourceMappingURL=ServiceUnavailableException.js.map