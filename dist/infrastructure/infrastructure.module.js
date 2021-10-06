"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfrastructureModule = void 0;
const common_1 = require("@nestjs/common");
const ConfigService_provider_1 = require("./ConfigService.provider");
const PrismaService_provider_1 = require("./PrismaService.provider");
let InfrastructureModule = class InfrastructureModule {
};
InfrastructureModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            {
                provide: ConfigService_provider_1.ConfigService,
                useValue: new ConfigService_provider_1.ConfigService('.env'),
            },
            PrismaService_provider_1.PrismaService,
        ],
        exports: [ConfigService_provider_1.ConfigService, PrismaService_provider_1.PrismaService],
    })
], InfrastructureModule);
exports.InfrastructureModule = InfrastructureModule;
//# sourceMappingURL=infrastructure.module.js.map