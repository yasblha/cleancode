import ValidationError from "@domain/errors/ValidationError";

export class PasswordDoesNotIncludeLowercaseLetterError extends ValidationError {
  public override readonly name = "PasswordDoesNotIncludeLowercaseLetterError";
}
