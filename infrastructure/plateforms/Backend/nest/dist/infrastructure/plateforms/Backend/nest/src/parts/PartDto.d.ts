import { Parts } from "@domain/entities/Parts";
export declare class PartDto implements Partial<Parts> {
    readonly identifier: string;
    readonly date: Date;
    readonly name: string;
    readonly reference: string;
    readonly description: string;
    readonly stockQuantity: number;
    readonly minStockLevel: number;
    readonly price: number;
}
export declare class UpdatePartDto implements Partial<Parts> {
    readonly date?: Date;
    readonly name?: string;
    readonly reference?: string;
    readonly description?: string;
    readonly stockQuantity?: number;
    readonly minStockLevel?: number;
    readonly price?: number;
}
