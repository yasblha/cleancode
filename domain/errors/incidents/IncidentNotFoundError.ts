import NotFoundError from "@domain/errors/NotFoundError";

export default class IncidentNotFoundError extends NotFoundError {
  public override readonly name = "IncidentNotFoundError";
}
