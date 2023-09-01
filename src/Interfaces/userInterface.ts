export interface ApiUser {
    address: Address
    id: number
    email: string
    username: string
    password: string
    name: Name
    phone: string
}

export interface Address {
    geolocation: Geolocation
    city: string
    street: string
    number: number
    zipcode: string
}

export interface Geolocation {
    lat: string
    long: string
}

export interface Name {
    firstname: string
    lastname: string
}

export interface userState {
    login: Login,
    user: ApiUser
}

export interface Login {
    username: string,
    password: string,
}