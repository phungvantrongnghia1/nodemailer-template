import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { User } from './AppRequest';
enum UserRole {
  'USER' = 'User',
}
export const AuthenticationUserPrincipal = createParamDecorator(
  (data: string, context: ExecutionContext): User => {
    const [request] = context.getArgs();
    const user = <any>request.user;
    console.log('user :>> ', user);
    if (!user || !user.roles.includes(UserRole.USER)) {
      throw new NotFoundException('User not found');
    }
    return user;
  },
);
