import ValidationError from "@domain/errors/ValidationError";
export declare class PasswordTooShortError extends ValidationError {
    readonly name = "PasswordTooShortError";
}
