export interface iFavorites {
    favorites: Array<iFavorite> | []
    //favorites:iFavorite[]
}

export interface iFavorite {
    id:string
    price:number
    title:string
    thumbnail:string
}