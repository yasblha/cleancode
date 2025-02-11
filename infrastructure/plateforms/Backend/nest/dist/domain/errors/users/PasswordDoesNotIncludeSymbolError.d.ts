import ValidationError from "@domain/errors/ValidationError";
export declare class PasswordDoesNotIncludeSymbolError extends ValidationError {
    readonly name = "PasswordDoesNotIncludeSymbolError";
}
