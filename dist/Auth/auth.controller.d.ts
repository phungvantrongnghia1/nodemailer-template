import { AppRequest } from '../pkgs/AppRequest';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: AppRequest): Promise<any>;
    getProfile(req: any): any;
}
