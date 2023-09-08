import { useEffect } from "react"
import { BranchCard } from "../../Components/BranchCard/BranchCard"
import { SearchBar } from "../../Components/SearchBar/SearchBar"
import { ProductContainer } from "../../Layouts/Catalogue Layout/ProductContainer"
import { CompanyCard } from "../../Layouts/Companys Layout/CompanyCard"
import { Header } from "../../Layouts/Header/Header"

import './Catalogue.css'
import { setSearchedItems } from "../../App/Slices/Search/Search"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../App/store"

export const Catalogue = () => {
    const dispatch = useDispatch()
    const items = useSelector((store: RootState) => store.items.items)
        dispatch(setSearchedItems(items))
    return (
        <>
            <article className="catalogueArticle flex">
                <CompanyCard />
                <div className="catalogue-container flex">
                    <Header header="catalogue" />
                    <BranchCard botonDeSalida={false} />
                    <SearchBar />
                    <ProductContainer />
                </div>
            </article>
        </>
    )
}