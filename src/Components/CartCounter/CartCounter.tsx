import { useSelector } from "react-redux"
import { Text } from "../Typography/Typography"

import './CartCounter.css'
import { RootState } from "../../App/store"

export const CartCounter = () => {

    const value = useSelector((store: RootState) => store.app.carrito).length

    return (
        <>
            <div className="cartCounter flex">
                <Text type="h4" style_type="text-button" size="text-pre-medium" content={`${value === undefined ? 0 : value}`} />
            </div>
        </>
    )
}
