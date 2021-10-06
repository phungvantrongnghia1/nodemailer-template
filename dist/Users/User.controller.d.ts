import { UserCreateService } from './UserCreate/UserCreate.service';
import { UserCreatePayload } from './UserCreate/UserCreatePayload';
export declare class UserController {
    private userCreateService;
    constructor(userCreateService: UserCreateService);
    login(req: any, payload: UserCreatePayload): Promise<import(".prisma/client").User>;
}
