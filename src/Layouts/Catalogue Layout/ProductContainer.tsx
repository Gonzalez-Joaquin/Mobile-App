import { useSelector } from "react-redux"
import { RootState } from "../../App/store"
import { useEffect, useState } from "react"
import { ListItem } from "../../Components/Item/ListItem"
import { ApiItem } from "../../Interfaces/ItemsInterface"
import getItemsBySearch from "../../Hooks/getItemsBySearch"
import { Loading } from "../../Pages/Loading/Loading"
import searchItemById from "../../Hooks/searchItemById"

export const ProductContainer = () => {

    const searchValue = useSelector((store: RootState) => store.app.search)
    const all_items = useSelector((store: RootState) => store.items.items)
    const loading = useSelector((store: RootState) => store.items.isLoading)


    const [items, setItems] = useState<ApiItem[]>(all_items)

    const [flag, setflag] = useState(-1)

    useEffect(() => {
        searchValue.value === ''
            ? setItems(all_items)
            : searchValue.type === 'name'
                ? setItems(getItemsBySearch(searchValue.value, all_items))
                : setItems(searchItemById(searchValue.value, all_items))
    }, [searchValue])

    useEffect(() => {
        setItems(all_items)
    }, [all_items])

    return (
        <div className="product-container">
            <div className="product-content flex">
                {
                    loading === true ? <Loading /> : items.map(item => <ListItem item={item} key={item.id} flag={flag} flagsetter={setflag} type="catalogue" />)
                }
            </div>
        </div>
    )
}