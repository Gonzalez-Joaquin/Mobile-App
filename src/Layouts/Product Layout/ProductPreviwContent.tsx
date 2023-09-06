import { Header } from "../Header/Header"
import { CompanyCard } from "../Companys Layout/CompanyCard"

import './Preview/Preview.css'
import { useSelector } from "react-redux"
import { RootState } from "../../App/store"
import { ProductPreview } from "./Preview/ProductPreview"

export const ProductPreviewContent = () => {

    const apiItem = useSelector((store: RootState) => store.items.items)

    const item = apiItem[0]

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
