import * as jwt from "jsonwebtoken";
import { JWTProviderInterface } from "@application/services/AuthenticationService";

export class JwtProvider implements JWTProviderInterface {
  sign(payload: object, secret: string, options?: jwt.SignOptions): string {
    return jwt.sign(payload, secret, options);
  }
  verify(token: string, secret: string): any {
    return jwt.verify(token, secret);
  }
}
