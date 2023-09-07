import { Link } from "react-router-dom"
import { Text } from "../../Components/Typography/Typography"
import { Header } from "../../Layouts/Header/Header"
import { Icon } from "../../Components/Icon/Icon"
import { Button } from "../../Components/Buttons/Button"

import './Cart.css'
import { CompanyCard } from "../../Layouts/Companys Layout/CompanyCard"

interface Props {
    prev: 'company' | 'catalogue'
}

export const Cart = ({ prev }: Props) => {
    return (
        <>
            <aside className="cartAside">
                <CompanyCard />
                <div className={`cartAside-container flex ${prev}`}>
                    <Header header="catalogue" />
                    <div className="cartAside-item top flex">
                        <Text type="h3" style_type="text-title" content="Mi pedido" size="text-medium" styles_color="text-gris-oscuro" />
                        <Link to={'/Catalogue'}>
                            <Icon icon="ballot" style_color="icon-violeta" />
                        </Link>
                    </div>
                    <div className="cartAside-item mid flex">

                    </div>
                    <div className="cartAside-item bottom flex">
                        <div className="cA-price flex">
                            <Text type="h4" style_type="text-subtitle" styles_color="text-gris-claro" content="Total" size="text-pre-medium" />
                            <Text type="h4" style_type="text-subtitle" styles_color="text-gris-oscuro" content={'$23.000,00'} />
                        </div>
                        <Button type="button" type_style="violeta" size="auto" value="Confiarmar pedido" />
                    </div>
                </div>
            </aside>
        </>
    )
}

