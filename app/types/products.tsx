interface IProducts{
    title: string,
    _id: string,
    price: number,
    stock: number,
    color: string,
    img? : string,
    size: string,
    category: string,
    createdAt: string,
    desc: string,
}

export interface IProductPromise{
    count: number,
    products: IProducts[]
}