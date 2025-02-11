import NotFound from "@domain/errors/NotFoundError";

export default class PartNotFoundError extends NotFound {
  public override name = "PartNotFoundError";
}
