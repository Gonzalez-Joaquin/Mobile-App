import { BranchCard } from "../../Components/BranchCard/BranchCard"
import { SearchBar } from "../../Components/SearchBar/SearchBar"
import { ProductContainer } from "../../Layouts/Catalogue Layout/ProductContainer"
import { Header } from "../../Layouts/Header/Header"

import './Catalogue.css'

export const Catalogue = () => {
    return (
        <>
            <article className="catalogueArticle flex">
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