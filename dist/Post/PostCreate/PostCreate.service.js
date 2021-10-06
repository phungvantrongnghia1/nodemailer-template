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
exports.PostCreateService = void 0;
const common_1 = require("@nestjs/common");
const ConfigService_provider_1 = require("../../infrastructure/ConfigService.provider");
const PrismaService_provider_1 = require("../../infrastructure/PrismaService.provider");
let PostCreateService = class PostCreateService {
    constructor(prismaService, configService) {
        this.prismaService = prismaService;
        this.configService = configService;
    }
    async execute(context, payload) {
        const { user } = context;
        const { tags } = payload;
        const tag = [...tags, 'all'].join(',');
        console.log('tag :>> ', tag);
        return this.prismaService.post.create({
            data: Object.assign(Object.assign({}, payload), { createAt: new Date(), tags: tag, userId: user.id }),
        });
    }
};
PostCreateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_provider_1.PrismaService,
        ConfigService_provider_1.ConfigService])
], PostCreateService);
exports.PostCreateService = PostCreateService;
//# sourceMappingURL=PostCreate.service.js.map