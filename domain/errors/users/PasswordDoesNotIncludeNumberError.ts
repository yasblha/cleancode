import ValidationError from "@domain/errors/ValidationError";

export class PasswordDoesNotIncludeNumberError extends ValidationError {
  public override readonly name = "PasswordDoesNotIncludeNumberError";
}
