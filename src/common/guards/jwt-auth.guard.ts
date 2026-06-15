import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      // Optional auth: if a Bearer token is present, try to validate it so
      // req.user gets populated; but never block access if it's missing.
      const req = context.switchToHttp().getRequest();
      const header: string | undefined = req.headers.authorization;
      if (header?.startsWith('Bearer ')) return super.canActivate(context);
      return true;
    }
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, _info: any, context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // On public routes don't throw even if token is invalid — just treat as guest
    if (isPublic) return user ?? null;
    return super.handleRequest(err, user, _info, context);
  }
}
