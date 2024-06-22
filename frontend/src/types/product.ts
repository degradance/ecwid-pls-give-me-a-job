export type ProductType = {
    id: number,
    name: string,
    price: number,
    description: string,
    galleryImages: GalleryImageType[],
    thumbnailUrl: string,
}

export type GalleryImageType = {
    url: string,
    orderBy: number,
}

export type ProductListType = {
    productIds: Array<number>,
    parentCategoryId?: number,
    showAsList?: boolean,
}

export type ImageGalleryType = {
    galleryImages: GalleryImageType[],
}

export type ProductCardType = {
    product: ProductType,
    parentCategoryId: number,
    showAsRow?: boolean,
}
