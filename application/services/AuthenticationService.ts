import { TokenGenerationError } from "@domain/errors/TokenGenerationError";
import { UnauthorizedError } from "@domain/errors/UnauthorizedError";

export interface JWTProviderInterface {
  sign(payload: object, secret: string, options?: any): string;
  verify(token: string, secret: string): any;  // Typage à affiner si besoin
}

export interface AuthenticationServiceInterface {
  createAuthenticationToken(userIdentifier: string): Promise<string>;
  verifyAuthenticationToken(authenticationToken: string): Promise<string | UnauthorizedError>;
}

export class AuthenticationService implements AuthenticationServiceInterface {
  private readonly jwtSecret: string;
  private readonly jwtExpiresIn: number;

  constructor(private readonly jwtProvider: JWTProviderInterface) {
    this.jwtSecret = process.env.JWT_SECRET || "secret";
    this.jwtExpiresIn = parseInt(process.env.JWT_EXPIRES_IN || "3600");
  }

  async createAuthenticationToken(userIdentifier: string): Promise<string> {
    try {
      const payload = { id: userIdentifier };
      const options = { expiresIn: this.jwtExpiresIn };
      const token = this.jwtProvider.sign(payload, this.jwtSecret, options);
      return token;
    } catch (error) {
      throw new TokenGenerationError();
    }
  }

  async verifyAuthenticationToken(authenticationToken: string): Promise<string | UnauthorizedError> {
    try {
      const decoded = this.jwtProvider.verify(authenticationToken, this.jwtSecret);
      if (!decoded || !decoded.id) {
        return new UnauthorizedError();
      }
      return decoded.id;
    } catch (error) {
      return new UnauthorizedError();
    }
  }
}
