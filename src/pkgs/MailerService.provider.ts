import { Injectable } from "@nestjs/common";
import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { RequestContext } from "./AppRequest";
import { google } from "googleapis";
import * as handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";
const OAuth2 = google.auth.OAuth2;

export type MailOptions = Mail.Options & {
  template?: string;
  data?: Record<string, any>;
  noLayout?: boolean;
};

@Injectable()
export class MailerService {
  private mailerTransportOption: Mail;

  constructor() {
    //
  }

  async execute(context: RequestContext): Promise<void> {
    await this.initConfigMail();
    try {
      const filePath = path.join(
        __dirname,
        "../../src/pkgs/emailVerification.html"
      );
      const source = fs.readFileSync(filePath, "utf-8").toString();
      const template = handlebars.compile(source);
      const replacements = {
        username: "Hello cac ban minh xin tu gioi thieu minh la ...",
      };
      const htmlToSend = template(replacements);

      // TODO: mail queue
      const buildMailContent = await this.buildMailContent({
        from: '"Fred Foo 👻" <email sender>', // sender address
        to: "email receiver", // list of receivers
        html: htmlToSend,
      });
      const response = await this.mailerTransportOption.sendMail(
        buildMailContent
      );
    } catch (error) {
      console.log("error during send mail:>> ", error);
    }
  }

  private async buildMailContent(options: MailOptions): Promise<MailOptions> {
    // TODO: build html content for sending email
    return options;
  }
  private async initConfigMail() {
    const CLIENT_ID = "";
    const CLIENT_SECRET = "";
    const REFRESH_TOKEN = "";
    const EMAIL = "";
    try {
      const createTransporter = async () => {
        const oauth2Client = new OAuth2(
          CLIENT_ID,
          CLIENT_SECRET,
          "https://developers.google.com/oauthplayground"
        );

        oauth2Client.setCredentials({
          refresh_token: REFRESH_TOKEN,
        });

        const accessToken = await new Promise((resolve, reject) => {
          oauth2Client.getAccessToken((err, token) => {
            if (err) {
              reject();
            }
            resolve(token);
          });
        });

        const transporter = createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
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
    } catch (error) {
      console.log("error :>> ", error);
    }
  }
}
