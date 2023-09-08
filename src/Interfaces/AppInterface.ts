export interface CarritoItems {
    id: number,
    cantidad: number,
}

export interface appState {
    carrito: CarritoItems[]
}