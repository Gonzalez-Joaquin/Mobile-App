import { Header } from "../Header/Header"
import { CompanyCard } from "../Companys Layout/CompanyCard"

import './Preview/Preview.css'
import { useSelector } from "react-redux"
import { RootState } from "../../App/store"
import { ProductPreview } from "./Preview/ProductPreview"
import getItemById from "../../Hooks/getItemById"

interface Props {
    id: number
}

export const ProductPreviewContent = ({ id }: Props) => {

    const apiItem = useSelector((store: RootState) => store.items.items)

    const item = getItemById(id, apiItem)

    if (item === undefined) return null

    return (
        <>
            <article className="pPreviewArticle flex">
                <Header header="app" />
                <Header header="peviewProduct" />
                <CompanyCard />
                <ProductPreview item={item} />
            </article>
        </>
    )
}
