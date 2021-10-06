"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModule = void 0;
const common_1 = require("@nestjs/common");
const infrastructure_module_1 = require("../infrastructure/infrastructure.module");
const MailerService_provider_1 = require("../pkgs/MailerService.provider");
const post_controller_1 = require("./post.controller");
const PostCreate_service_1 = require("./PostCreate/PostCreate.service");
const PostsGet_service_1 = require("./PostsGet/PostsGet.service");
let PostModule = class PostModule {
};
PostModule = __decorate([
    (0, common_1.Module)({
        imports: [infrastructure_module_1.InfrastructureModule],
        providers: [PostCreate_service_1.PostCreateService, PostsGet_service_1.PostsGetService, MailerService_provider_1.MailerService],
        controllers: [post_controller_1.PostController],
    })
], PostModule);
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map