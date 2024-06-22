export type BaseButtonType = {
    text: string,
    dark?: boolean,
    special?: boolean,
    onClick: (e: MouseEvent) => void,
}

export type BaseCarouselType = {
    showButtons: boolean,
}
