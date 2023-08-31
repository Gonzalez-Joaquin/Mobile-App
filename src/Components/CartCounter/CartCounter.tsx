import { Text } from "../Typography/Typography"

import './CartCounter.css'

export const CartCounter = () => {
    return (
        <>
            <div className="cartCounter flex">
                <Text type="h4" style_type="text-button" size="text-pre-medium" content="0" />
            </div>
        </>
    )
}
