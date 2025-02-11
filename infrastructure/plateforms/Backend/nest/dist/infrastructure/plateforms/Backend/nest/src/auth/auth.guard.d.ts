import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import AuthVerifyUseCase from "@application/useCases/AuthVerifyUseCase";
export declare class AuthGuard implements CanActivate {
    private reflector;
    private readonly authVerifyUseCase;
    constructor(reflector: Reflector, authVerifyUseCase: AuthVerifyUseCase);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
