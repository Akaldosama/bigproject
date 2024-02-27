interface IUsers{
    username: string,
    _id: string,
    email: string,
    isAdmin: string,
    isActive: string,
    img? : string,
    address: string,
    phone: string,
    password: string,
    createdAt: string
}

export interface IUserPromise{
    count: number,
    users: IUsers[]
}