export default class VinIdentifier {
    readonly value: string;
    static REGEX: RegExp;
    constructor(value: string);
    validate(value: string): boolean;
    equals(other: VinIdentifier): boolean;
}
