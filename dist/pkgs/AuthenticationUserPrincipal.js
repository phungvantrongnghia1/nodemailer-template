"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationUserPrincipal = void 0;
const common_1 = require("@nestjs/common");
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "User";
})(UserRole || (UserRole = {}));
exports.AuthenticationUserPrincipal = (0, common_1.createParamDecorator)((data, context) => {
    const [request] = context.getArgs();
    const user = request.user;
    console.log('user :>> ', user);
    if (!user || !user.roles.includes(UserRole.USER)) {
        throw new common_1.NotFoundException('User not found');
    }
    return user;
});
//# sourceMappingURL=AuthenticationUserPrincipal.js.map