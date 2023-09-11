export interface CarritoItems {
    id: number,
    cantidad: number,
}

export interface appState {
    search: string,
    carrito: CarritoItems[]
}