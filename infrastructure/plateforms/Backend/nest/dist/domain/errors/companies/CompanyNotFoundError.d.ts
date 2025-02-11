import NotFoundError from "@domain/errors/NotFoundError";
export default class CompanyNotFoundError extends NotFoundError {
    readonly name = "CompanyNotFoundError";
}
