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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const JwtAuthGuard_guard_1 = require("../Auth/guard/JwtAuthGuard.guard");
const MailerService_provider_1 = require("../pkgs/MailerService.provider");
const PostCreate_service_1 = require("./PostCreate/PostCreate.service");
const PostCreatePayload_1 = require("./PostCreate/PostCreatePayload");
const PostsGet_service_1 = require("./PostsGet/PostsGet.service");
let PostController = class PostController {
    constructor(postCreateService, postsGetService, mailerService) {
        this.postCreateService = postCreateService;
        this.postsGetService = postsGetService;
        this.mailerService = mailerService;
    }
    createPost(req, payload) {
        return this.postCreateService.execute(req, payload);
    }
    getPosts(req, page, take) {
        return this.postsGetService.execute(req, page, take);
    }
    deletePost(req, page) {
        return this.mailerService.execute(req);
    }
};
__decorate([
    (0, common_1.UseGuards)(JwtAuthGuard_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, PostCreatePayload_1.PostCreatePayload]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page', new common_1.DefaultValuePipe(0), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('take', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getPosts", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id', new common_1.DefaultValuePipe(0), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "deletePost", null);
PostController = __decorate([
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [PostCreate_service_1.PostCreateService,
        PostsGet_service_1.PostsGetService,
        MailerService_provider_1.MailerService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map