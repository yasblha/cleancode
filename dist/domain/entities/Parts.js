"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parts = void 0;
class Parts {
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
exports.Parts = Parts;
