import ValidationError from "@domain/errors/ValidationError";
export declare class PasswordDoesNotIncludeNumberError extends ValidationError {
    readonly name = "PasswordDoesNotIncludeNumberError";
}
