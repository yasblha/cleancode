export class Parts {
    id;
    name;
    description;
    stockQuantity;
    minStockLevel;
    price;
    createdAt;
    updatedAt;
    constructor(id, name, description, stockQuantity, minStockLevel, price, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.stockQuantity = stockQuantity;
        this.minStockLevel = minStockLevel;
        this.price = price;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
