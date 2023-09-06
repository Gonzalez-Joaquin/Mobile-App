import { useSelector } from "react-redux"
import { RootState } from "../../App/store"

export const ProductContainer = () => {

    const items = useSelector((store: RootState) => store.items.items)

    return (
        <div className="product-container flex">
            {
                //aca irian con el map!
                // items.map(item => {
                // <Item item={item} />
                // })
            }
        </div>
    )
}
