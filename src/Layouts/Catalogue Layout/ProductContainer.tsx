import { useSelector } from "react-redux"
import { RootState } from "../../App/store"
import { useState } from "react"
import { ListItem } from "../../Components/Item/ListItem"

export const ProductContainer = () => {

    const items = useSelector((store: RootState) => store.items.items)
    const [flag, setflag] = useState(-1)

    return (
        <div className="product-container flex">
            {
                items.map(item => <ListItem item={item} flag={flag} flagsetter={setflag} />)
            }
        </div>
    )
}
