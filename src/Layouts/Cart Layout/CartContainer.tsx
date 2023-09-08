import { useSelector } from "react-redux"
import { RootState } from "../../App/store"
import { useEffect, useState } from "react"
import { Text } from "../../Components/Typography/Typography"
import { CarritoItems } from "../../Interfaces/AppInterface"
import { ListItem } from "../../Components/Item/ListItem"

export const CartContainer = () => {

    const carrito = useSelector((store: RootState) => store.app.carrito)
    const items = useSelector((store: RootState) => store.items.items)

    const [cart, setCart] = useState<CarritoItems[] | []>([])
    const [flag, setflag] = useState(-1)

    useEffect(() => {
        setCart(carrito)
    }, [carrito])

    return (
        <div className="cartContainer flex">
            {cart.length > 0 && (
                cart.map(carritoItem => {
                    const item = items.find(item => item.id === carritoItem.id)

                    if (item == null) return null

                    return <ListItem item={item} key={item.id} flag={flag} flagsetter={setflag} type="cart" />
                })
            )}
            {cart.length === 0 && (
                <Text type="h3" style_type="text-subtitle" styles_color="text-gris-claro" size="text-large" content="Elija productos para continuar" />
            )}
        </div>
    )
}
