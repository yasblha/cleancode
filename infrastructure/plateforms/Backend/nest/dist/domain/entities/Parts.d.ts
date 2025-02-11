export declare class Parts {
    id: number;
    name: string;
    description: string;
    stockQuantity: number;
    minStockLevel: number;
    price: number;
    createdAt: Date;
    updatedAt: Date | null;
    constructor(id: number, name: string, description: string, stockQuantity: number, minStockLevel: number, price: number, reference: string, createdAt: Date, updatedAt: Date | null);
}
