export declare class Parts {
    id: string;
    name: string;
    description: string;
    stockQuantity: number;
    minStockLevel: number;
    price: number;
    createdAt: Date;
    updatedAt: Date | null;
    constructor(id: string, name: string, description: string, stockQuantity: number, minStockLevel: number, price: number, createdAt: Date, updatedAt: Date | null);
}
