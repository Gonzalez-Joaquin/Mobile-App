import { CompanyCard } from "../../Layouts/Companys Layout/CompanyCard"
import { CompanyContent } from "../../Layouts/Companys Layout/CompanyContent"
import { Header } from "../../Layouts/Header/Header"

import './Companys.css'

export const Companys = () => {
    return (
        <>
            <article className="companysArticle flex">
                <Header header={'app'} />
                <CompanyCard />
                <CompanyContent />
            </article>
        </>
    )
}
