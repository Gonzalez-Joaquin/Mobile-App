import { Carrito } from '../Interfaces/AppInterface'

const getItemQuantity = (id: number, items: Carrito[]) => {
    return items.find(item => item.id === id)?.cantidad || 0
}

export default getItemQuantity