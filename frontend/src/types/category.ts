
export type Category = {
    id: number,
    parentId: number,
    imageUrl: string,
    name: string,
    productIds: number[],
    productCount: number,
}

export type CategoryCardType = {
    category: Category
}

export type CategoryListType = {
    parentId?: number,
    subcategory?: boolean,
}
