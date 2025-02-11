import * as jwt from "jsonwebtoken";
import { JWTProviderInterface } from "@application/services/AuthenticationService";
export declare class JwtProvider implements JWTProviderInterface {
    sign(payload: object, secret: string, options?: jwt.SignOptions): string;
    verify(token: string, secret: string): any;
}
