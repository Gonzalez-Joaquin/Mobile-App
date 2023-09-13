export interface CarritoItems {
    id: number,
    cantidad: number,
}

export interface appState {
    search: { value: string, type: 'name' | 'id' },
    carrito: CarritoItems[]
}