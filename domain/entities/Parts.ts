export class Parts {
    public constructor(
        public id: string,
        public name: string,
        public description: string,
        public stockQuantity: number,
        public minStockLevel: number,
        public price: number,
        public createdAt: Date,
        public updatedAt: Date | null,
    ) {}
}