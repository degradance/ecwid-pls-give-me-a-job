export type Category = {
    id: number,
    parentId: number,
    imageUrl: string,
    name: string,
    productIds: number[],
    productCount: number,
}
