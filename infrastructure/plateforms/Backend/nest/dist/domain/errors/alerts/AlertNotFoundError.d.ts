import NotFoundError from "@domain/errors/NotFoundError";
export default class AlertNotFoundError extends NotFoundError {
    readonly name = "AlertNotFoundError";
}
