import Mail from 'nodemailer/lib/mailer';
import { RequestContext } from './AppRequest';
export declare type MailOptions = Mail.Options & {
    template?: string;
    data?: Record<string, any>;
    noLayout?: boolean;
};
export declare class MailerService {
    private mailerTransportOption;
    constructor();
    execute(context: RequestContext): Promise<void>;
    private buildMailContent;
    private initConfigMail;
}
