"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const hashUser_1 = require("../Users/hashUser");
const InvalidCredentialsException_1 = require("../pkgs/exceptions/InvalidCredentialsException");
const ConfigService_provider_1 = require("../infrastructure/ConfigService.provider");
const PrismaService_provider_1 = require("../infrastructure/PrismaService.provider");
let AuthService = class AuthService {
    constructor(jwtService, configService, prismaService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.prismaService = prismaService;
    }
    async validateUser(username, password) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: username,
            },
        });
        if (user) {
            await this.comparePassword(username, password, user.password || '');
            return {
                id: user.id,
                email: user.email,
                name: user.name,
                createAt: user.createAt,
                roles: ['User'],
            };
        }
        return null;
    }
    async login(user) {
        console.log('user login:>> ', user);
        return {
            user,
            roles: ['User'],
            access_token: this.jwtService.sign(user),
        };
    }
    async comparePassword(email, password, verifyPassword) {
        const passwordHash = await (0, hashUser_1.hashPassword)(email, password, this.configService.secretJwt);
        const isComparePassword = await (0, hashUser_1.verify)(passwordHash, verifyPassword);
        if (!isComparePassword) {
            throw new InvalidCredentialsException_1.InvalidCredentialsException('Username and password are not correct');
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        ConfigService_provider_1.ConfigService,
        PrismaService_provider_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map