import ValidationError from "@domain/errors/ValidationError";
export declare class PasswordDoesNotIncludeUppercaseLetterError extends ValidationError {
    readonly name = "PasswordDoesNotIncludeUppercaseLetterError";
}
