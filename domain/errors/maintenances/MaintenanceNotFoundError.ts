import NotFoundError from "@domain/errors/NotFoundError";

export default class MaintenanceNotFoundError extends NotFoundError {
  public override readonly name = "MaintenanceNotFoundError";
}
