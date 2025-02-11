import ValidationError from "@domain/errors/ValidationError";

export class PasswordDoesNotIncludeUppercaseLetterError extends ValidationError {
  public override readonly name = "PasswordDoesNotIncludeUppercaseLetterError";
}
