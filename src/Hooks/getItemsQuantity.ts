import { useSelector } from "react-redux"
import { RootState } from "../App/store"

const getItemQuantity = (id: number) => {
    const items = useSelector((store: RootState) => store.app.carrito)

    return items.find(item => item.id === id)?.cantidad || 0
}

export default getItemQuantity