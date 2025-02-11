import { UnauthorizedError } from "@domain/errors/UnauthorizedError";
export interface JWTProviderInterface {
    sign(payload: object, secret: string, options?: any): string;
    verify(token: string, secret: string): any;
}
export interface AuthenticationServiceInterface {
    createAuthenticationToken(userIdentifier: string): Promise<string>;
    verifyAuthenticationToken(authenticationToken: string): Promise<string | UnauthorizedError>;
}
export declare class AuthenticationService implements AuthenticationServiceInterface {
    private readonly jwtProvider;
    private readonly jwtSecret;
    private readonly jwtExpiresIn;
    constructor(jwtProvider: JWTProviderInterface);
    createAuthenticationToken(userIdentifier: string): Promise<string>;
    verifyAuthenticationToken(authenticationToken: string): Promise<string | UnauthorizedError>;
}
