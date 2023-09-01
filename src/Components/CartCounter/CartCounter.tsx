import { Text } from "../Typography/Typography"

import './CartCounter.css'

export const CartCounter = () => {

    const value = undefined

    return (
        <>
            <div className="cartCounter flex">
                <Text type="h4" style_type="text-button" size="text-pre-medium" content={`${value === undefined ? 0 : value}`} />
            </div>
        </>
    )
}
