import NotFoundError from "@domain/errors/NotFoundError";

export default class AlertNotFoundError extends NotFoundError {
  public override readonly name = "AlertNotFoundError";
}
