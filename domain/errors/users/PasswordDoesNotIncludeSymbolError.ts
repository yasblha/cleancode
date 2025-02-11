import ValidationError from "@domain/errors/ValidationError";

export class PasswordDoesNotIncludeSymbolError extends ValidationError {
  public override readonly name = "PasswordDoesNotIncludeSymbolError";
}
