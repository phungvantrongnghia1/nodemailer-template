"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.verify = exports.hashAndValidatePassword = void 0;
const bcrypt_1 = require("bcrypt");
const js_sha256_1 = require("js-sha256");
const hashAndValidatePassword = async (password, saltRounds) => {
    return (0, bcrypt_1.hash)(password, saltRounds);
};
exports.hashAndValidatePassword = hashAndValidatePassword;
const verify = async (password, hashPassword) => {
    if (!hashPassword) {
        return false;
    }
    return (0, bcrypt_1.compare)(password, hashPassword);
};
exports.verify = verify;
const hashPassword = async (email, password, preHashSalt) => {
    return js_sha256_1.sha256.hmac
        .update(preHashSalt, `${email}${preHashSalt}${password}`)
        .hex();
};
exports.hashPassword = hashPassword;
//# sourceMappingURL=hashUser.js.map