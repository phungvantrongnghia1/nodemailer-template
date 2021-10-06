import { Request } from 'express';
export interface User {
    id: number;
    email: string;
    name: string | null;
    state?: number | 0;
    token: string;
    roles: string[];
}
export interface AppRequest extends Request {
    user: User;
    correlationId: string;
}
export interface RequestContext {
    user: User;
    correlationId: string;
}
