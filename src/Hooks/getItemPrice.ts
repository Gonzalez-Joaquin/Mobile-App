import { CarritoItems } from '../Interfaces/AppInterface'
import { ApiItem } from '../Interfaces/ItemsInterface'

const getItemPrice = (items: ApiItem[], carrito: CarritoItems[]) => {

    let price = 0

    items.map(item => {
        carrito.map(carritoItem => {
            if (item.id === carritoItem.id) {
                price += item.price * carritoItem.cantidad
            }
        })
    })



    return price;
}

export default getItemPrice