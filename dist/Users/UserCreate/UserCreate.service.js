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
exports.UserCreateService = void 0;
const common_1 = require("@nestjs/common");
const ConfigService_provider_1 = require("../../infrastructure/ConfigService.provider");
const PrismaService_provider_1 = require("../../infrastructure/PrismaService.provider");
const EmailAlreadyExistException_1 = require("../../pkgs/exceptions/EmailAlreadyExistException");
const hashUser_1 = require("../hashUser");
let UserCreateService = class UserCreateService {
    constructor(prismaService, configService) {
        this.prismaService = prismaService;
        this.configService = configService;
    }
    async execute(payload) {
        const hasUserExist = await this.prismaService.user.findUnique({
            where: {
                email: payload.email,
            },
        });
        if (hasUserExist) {
            throw new EmailAlreadyExistException_1.EmailAlreadyExistException('This email address is already being used');
        }
        const passwordDecode = await (0, hashUser_1.hashPassword)(payload.email, payload.password, this.configService.secretJwt);
        const passwordHash = await (0, hashUser_1.hashAndValidatePassword)(passwordDecode, this.configService.saltRounds);
        const inputCreate = Object.assign(Object.assign({}, payload), { createAt: new Date(), password: passwordHash });
        return this.prismaService.user.create({
            data: inputCreate,
        });
    }
};
UserCreateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_provider_1.PrismaService,
        ConfigService_provider_1.ConfigService])
], UserCreateService);
exports.UserCreateService = UserCreateService;
//# sourceMappingURL=UserCreate.service.js.map