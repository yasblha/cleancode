import NotFoundError from "@domain/errors/NotFoundError";
export default class UserNotFoundError extends NotFoundError {
    constructor(s: string);
    readonly name = "UserNotFoundError";
}
