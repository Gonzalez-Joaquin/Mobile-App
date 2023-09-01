import { Header } from "../Header/Header"
import { ProductPreview_Desc } from "./Preview/ProductPreview_Desc"
import { ProductPreview_Images } from "./Preview/ProductPreview_Images"
import { CompanyCard } from "../Companys Layout/CompanyCard"

import './Preview/Preview.css'

export const ProductPreviewContent = () => {
    return (
        <>
            <article className="pPreviewArticle flex">
                <Header header="app" />
                <Header header="peviewProduct" />
                <CompanyCard />
                <ProductPreview_Images />
                <ProductPreview_Desc />
            </article>
        </>
    )
}
