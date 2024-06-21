export type Product = {
    id: number,
    name: string,
    price: number,
    description: string,
    galleryImages: GalleryImage[],
    thumbnailUrl: string,
}

export type GalleryImage = {
    url: string,
    orderBy: number,
}
