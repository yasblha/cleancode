import LoginUseCase from "@application/useCases/LoginUseCase";
export declare class AuthService {
    private readonly loginUseCase;
    constructor(loginUseCase: LoginUseCase);
    signIn(email: string, password: string): Promise<string>;
}
