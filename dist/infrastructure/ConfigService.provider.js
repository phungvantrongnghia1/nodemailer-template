"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const dotenv = require("dotenv");
const fs = require("fs");
class ConfigService {
    constructor(filePath) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }
    get pgConnection() {
        return this.envConfig['DATABASE_URL'] ? this.envConfig['DATABASE_URL'] : '';
    }
    get secretJwt() {
        return this.envConfig['SECRET_KEY'] ? this.envConfig['SECRET_KEY'] : '';
    }
    get saltRounds() {
        return this.envConfig['SALT_ROUNDS']
            ? Number.parseInt(this.envConfig['SALT_ROUNDS'], 10)
            : 10;
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=ConfigService.provider.js.map