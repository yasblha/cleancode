export class Parts {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public stockQuantity: number,
        public minStockLevel: number,
        public price: number,
        reference: string,
        public createdAt: Date,
        public updatedAt: Date | null,
    ) {}
}