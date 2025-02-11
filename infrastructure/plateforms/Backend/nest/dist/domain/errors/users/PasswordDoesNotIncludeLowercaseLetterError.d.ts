import ValidationError from "@domain/errors/ValidationError";
export declare class PasswordDoesNotIncludeLowercaseLetterError extends ValidationError {
    readonly name = "PasswordDoesNotIncludeLowercaseLetterError";
}
