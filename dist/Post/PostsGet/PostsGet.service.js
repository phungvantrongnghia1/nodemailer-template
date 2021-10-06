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
exports.PostsGetService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_provider_1 = require("../../infrastructure/PrismaService.provider");
let PostsGetService = class PostsGetService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async execute(context, page, take) {
        const posts = await this.prismaService.post.findMany({
            include: {
                comment: {
                    take: 10,
                },
                emoji: true,
            },
            take: take,
            skip: page,
            orderBy: {
                createAt: 'desc',
            },
        });
        const postCount = await this.prismaService.post.count();
        return {
            posts,
            currentPage: page,
            size: take,
            total: postCount,
        };
    }
};
PostsGetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_provider_1.PrismaService])
], PostsGetService);
exports.PostsGetService = PostsGetService;
//# sourceMappingURL=PostsGet.service.js.map