import NotFoundError from "@domain/errors/NotFoundError";
export default class IncidentNotFoundError extends NotFoundError {
    readonly name = "IncidentNotFoundError";
}
