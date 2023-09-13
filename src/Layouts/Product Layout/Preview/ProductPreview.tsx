import { useState } from "react"
import { Button } from "../../../Components/Buttons/Button"
import { Icon } from "../../../Components/Icon/Icon"
import { Text } from "../../../Components/Typography/Typography"
import { ApiItem } from "../../../Interfaces/ItemsInterface"
import { RootState } from "../../../App/store"
import getItemQuantity from "../../../Hooks/getItemsQuantity"
import incrementItems from "../../../Helpers/incrementItems"
import decrementItems from "../../../Helpers/decrementItems"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

interface Props {
    item: ApiItem
}

export const ProductPreview = ({ item }: Props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((store: RootState) => store.app.carrito)

    const [countProduct, setCountProduct] = useState(getItemQuantity(item.id, cart))

    const handleClick = () => {

        console.log(countProduct)

        countProduct >= getItemQuantity(item.id, cart) ? incrementItems(item.id, countProduct, cart, dispatch) : decrementItems(item.id, countProduct, cart, dispatch)

        navigate('/Catalogue')
    }

    return (
        <>
            <div className="pPArticle-content desc flex">
                <div className="pPArticle-content img flex">
                    <div className="pParticle-container-image">
                        <img src={item.image} className="preview-image" />
                    </div>
                </div>
                <div className="pPArticle desc-item flex">
                    <div className="pPArticle desc-inside title flex">
                        <Text type="h3" style_type="text-title" content={item.title} styles_color="text-gris-oscuro" style_transform="text-capitalize" size="text-medium" />
                        <Icon icon='heart' style_color="icon-gris-medio" />
                    </div>
                    <div className="pPArticle desc-inside icon flex">
                        <Text type="h4" style_type="text-subtitle" content={`Código: ${item.id}`} size="text-pre-medium" styles_color="text-gris-oscuro" />
                    </div>
                </div>
                <div className="pPArticle desc-item flex">
                    <div className="pPArticle desc-inside text">
                        <Text type="p" style_type="text-p" size="text-extra-small" content={item.description} />
                    </div>
                </div>
                <div className="pPArticle desc-item buttons flex">
                    <div className="pPArticle desc-inside first flex">
                        <div className="desc-inside buttons flex">
                            <button type="button" className="btn-remove flex" onClick={() => setCountProduct(countProduct === 0 ? 0 : countProduct - 1)}>
                                <Icon icon="minus" style_color="icon-gris-medio" />
                            </button>
                            <Text type="h3" style_type="text-title" styles_color="text-gris-oscuro" size="text-medium" content={`${countProduct}`} />
                            <button type="button" className="btn-add flex" onClick={() => setCountProduct(countProduct + 1)}>
                                <Icon icon="plus" style_color="icon-gris-medio" />
                            </button>
                        </div>
                        <Text type="h3" style_type="text-title" styles_color="text-gris-oscuro" size="text-medium" content={`$${countProduct === 0 ? item.price.toFixed(2) : (item.price * countProduct).toFixed(2)}`} />
                    </div>
                    <Button type="button" type_style="violeta" value="Actualizar Carrito" size="auto" onClick={() => handleClick()} />
                </div>
            </div>
        </>
    )
}
