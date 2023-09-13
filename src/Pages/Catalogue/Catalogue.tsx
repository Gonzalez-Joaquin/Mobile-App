import { BranchCard } from "../../Components/BranchCard/BranchCard"
import { SearchBar } from "../../Components/SearchBar/SearchBar"
import { ProductContainer } from "../../Layouts/Catalogue Layout/ProductContainer"
import { CompanyCard } from "../../Layouts/Companys Layout/CompanyCard"
import { Header } from "../../Layouts/Header/Header"

interface Props {
    prev: 'company' | 'cart'
}

import './Catalogue.css'

export const Catalogue = ({ prev }: Props) => {
    return (
        <>
            <article className={`catalogueArticle flex ${prev}`}>
                <CompanyCard />
                <div className="catalogue-container flex">
                    <Header header="catalogue" to="Company" />
                    <BranchCard botonDeSalida={false} />
                    <SearchBar />
                    <ProductContainer />
                </div>
            </article>
        </>
    )
}