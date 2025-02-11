import NotFoundError from "@domain/errors/NotFoundError";

export default class UserNotFoundError extends NotFoundError {
    constructor(s: string) {
        super();

    }

    public override readonly name = "UserNotFoundError";
}
