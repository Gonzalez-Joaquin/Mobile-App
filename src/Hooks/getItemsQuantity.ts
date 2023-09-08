import { CarritoItems } from '../Interfaces/AppInterface'

const getItemQuantity = (id: number, items: CarritoItems[]) => {
    return items.find(item => item.id === id)?.cantidad || 0
}

export default getItemQuantity