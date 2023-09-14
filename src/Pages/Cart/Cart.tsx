import { Link, useNavigate } from "react-router-dom"
import { Text } from "../../Components/Typography/Typography"
import { Header } from "../../Layouts/Header/Header"
import { Icon } from "../../Components/Icon/Icon"
import { Button } from "../../Components/Buttons/Button"

import './Cart.css'
import { CompanyCard } from "../../Layouts/Companys Layout/CompanyCard"
import { CartContainer } from "../../Layouts/Cart Layout/CartContainer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../App/store"
import getItemPrice from "../../Hooks/getItemPrice"
import { removeAll } from "../../App/Slices/App/AppSlice"

interface Props {
    prev: 'company' | 'catalogue'
}

export const Cart = ({ prev }: Props) => {

    const navigate = useNavigate()
    const carrito = useSelector((store: RootState) => store.app.carrito)
    const items = useSelector((store: RootState) => store.items.items)
    const disptach = useDispatch()
    const [price, setPrice] = useState(0)

    useEffect(() => {
        setPrice(getItemPrice(items, carrito))
    }, [carrito])

    return (
        <>
            <aside className="cartAside">
                <CompanyCard />
                <div className={`cartAside-container flex ${prev}`}>
                    <Header header="catalogue" to="Catalogue" />
                    <div className="cartAside-item top flex">
                        <Text type="h3" style_type="text-title" content="Mi pedido" size="text-medium" styles_color="text-gris-oscuro" />
                        <Link to={'/Cart/Catalogue'}>
                            <Icon icon="ballot" style_color="icon-violeta" />
                        </Link>
                    </div>
                    <div className="cartAside-item mid flex">
                        <CartContainer />
                    </div>
                    <div className={`cartAside-item bottom flex ${carrito.length > 0 ? 'active' : ''}`}>
                        <div className="cA-price flex">
                            <Text type="h4" style_type="text-subtitle" styles_color="text-gris-claro" content="Total" size="text-pre-medium" />
                            <Text type="h4" style_type="text-subtitle" styles_color="text-gris-oscuro" content={`$${price}`} />
                        </div>
                        <Button type="button" type_style="violeta" size="auto" value="Confirmar pedido" onClick={() => {
                            navigate('/Succes')
                            disptach(removeAll())
                        }} />
                    </div>
                </div>
            </aside>
        </>
    )
}

