interface Carrito {
    id: number,
    cantidad: number,
}

export interface appState {
    carrito: Carrito[]
}