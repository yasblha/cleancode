import { AuthService } from "./auth.service";
import { signInDto } from "./signInDto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: signInDto): Promise<string>;
    getProfile(request: any): any;
}
