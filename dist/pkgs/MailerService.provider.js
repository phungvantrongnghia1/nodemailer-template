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
exports.MailerService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer_1 = require("nodemailer");
const googleapis_1 = require("googleapis");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const OAuth2 = googleapis_1.google.auth.OAuth2;
let MailerService = class MailerService {
    constructor() {
    }
    async execute(context) {
        await this.initConfigMail();
        try {
            const filePath = path.join(__dirname, '../../src/pkgs/emailVerification.html');
            const source = fs.readFileSync(filePath, 'utf-8').toString();
            const template = handlebars.compile(source);
            const replacements = {
                username: 'Hello cac ban minh xin tu gioi thieu minh la ...',
            };
            const htmlToSend = template(replacements);
            const buildMailContent = await this.buildMailContent({
                from: '"Fred Foo 👻" <enringhia1@gmail.com>',
                to: 'phungvantrongnghia1@gmail.com',
                html: htmlToSend,
            });
            const response = await this.mailerTransportOption.sendMail(buildMailContent);
        }
        catch (error) {
            console.log('error during send mail:>> ', error);
        }
    }
    async buildMailContent(options) {
        return options;
    }
    async initConfigMail() {
        const CLIENT_ID = '489667008444-3ul535gofo2h4en8gadnhjpftmdjt6sn.apps.googleusercontent.com';
        const CLIENT_SECRET = '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';
        const REFRESH_TOKEN = '1//04_n09jPE6rhBCgYIARAAGAQSNwF-L9IrnQRh4zWbp7vXijK8cxIxzSQcAH4hMS-B7PU4jxoBcCLeVy5m2ED0vAhFil4uBPxSKDo';
        const EMAIL = 'enringhia1@gmail.com';
        try {
            const createTransporter = async () => {
                const oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, 'https://developers.google.com/oauthplayground');
                oauth2Client.setCredentials({
                    refresh_token: REFRESH_TOKEN,
                });
                const accessToken = await new Promise((resolve, reject) => {
                    oauth2Client.getAccessToken((err, token) => {
                        console.log('err :>> ', err);
                        if (err) {
                            reject();
                        }
                        resolve(token);
                    });
                });
                const transporter = (0, nodemailer_1.createTransport)({
                    service: 'gmail',
                    auth: {
                        type: 'OAuth2',
                        user: EMAIL,
                        accessToken,
                        clientId: CLIENT_ID,
                        clientSecret: CLIENT_SECRET,
                        refreshToken: REFRESH_TOKEN,
                    },
                });
                return transporter;
            };
            this.mailerTransportOption = await createTransporter();
        }
        catch (error) {
            console.log('error :>> ', error);
        }
    }
};
MailerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MailerService);
exports.MailerService = MailerService;
//# sourceMappingURL=MailerService.provider.js.map