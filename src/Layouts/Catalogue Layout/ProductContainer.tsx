import { useSelector } from "react-redux"
import { RootState } from "../../App/store"
import { useState } from "react"
import { ListItem } from "../../Components/Item/ListItem"
import { setSearchedItems } from "../../App/Slices/Search/Search"

export const ProductContainer = () => {

    const searchedItems = useSelector((store: RootState) => store.search.searchedItems)
    const [flag, setflag] = useState(-1)
    

    return (
        <div className="product-container">
            <div className="product-content flex">
                {
                    searchedItems.map(item => <ListItem item={item} key={item.id} flag={flag} flagsetter={setflag} />)
                }
            </div>
        </div>
    )
}
