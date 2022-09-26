export interface gameInfo {
    id: number,
    title: string,
    imageURL: string,
    listPrice: number,
    salePrice: number,
    osIconsList: string[]
}

export type gameCardProps = {
    game: gameInfo,
    favoritesList: number[]
    setFavoritesList: Function
}