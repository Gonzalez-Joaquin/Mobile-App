import { useSelector } from "react-redux"
import { RootState } from "../../App/store"

export const CartContainer = () => {

    const carrito = useSelector((store: RootState) => store.app.carrito)
    const items = useSelector((store: RootState) => store.items)



    return (
        <div className="cartContainer">

        </div>
    )
}
