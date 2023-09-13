import { useSelector } from "react-redux"
import { Text } from "../Typography/Typography"

import './CartCounter.css'
import { RootState } from "../../App/store"
import { useEffect, useState } from "react"

export const CartCounter = () => {

    const value = useSelector((store: RootState) => store.app.carrito).length
    const [temp, settemp] = useState(0)
    let animation = ""
    useEffect(() => {
        if(value>temp){
            animation = "plus"
        }
        if(value<temp){
            animation = "minus"
        }
        if(value===temp){
            animation = ""
        }
        settemp(value)
    }, [value])
    
        
    

    return (
        <>
            <div className={`cartCounter flex ${animation}`}>
                <Text type="h4" style_type="text-button" size="text-pre-medium" content={`${value === undefined ? 0 : value}`} />
            </div>
        </>
    )
}
