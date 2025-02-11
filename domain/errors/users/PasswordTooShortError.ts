import ValidationError from "@domain/errors/ValidationError";

export class PasswordTooShortError extends ValidationError {
  public override readonly name = "PasswordTooShortError";
}
