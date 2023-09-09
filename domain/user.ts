export interface RegisterUser {
    name: string, 
    email: string, 
    password: string, 
    phone: string
}

export interface User {
    _id: string,
    name: string, 
    email: string, 
    phone: string,
    createAt: string | null
}

