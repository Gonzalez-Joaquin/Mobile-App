import { useState } from "react"
import { Button } from "../../../Components/Buttons/Button"
import { Icon } from "../../../Components/Icon/Icon"
import { Text } from "../../../Components/Typography/Typography"
import { ApiItem } from "../../../Interfaces/ItemsInterface"

interface Props {
    item: ApiItem
}

export const ProductPreview = ({ item }: Props) => {

    const [countProduct, setCountProduct] = useState(1)

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
                    Button.</div>
                <div className="pPArticle desc-item flex">
                    <div className="pPArticle desc-inside text">
                        <Text type="p" style_type="text-p" size="text-extra-small" content={item.description} />
                    </div>
                </div>
                <div className="pPArticle desc-item buttons flex">
                    <div className="pPArticle desc-inside first flex">
                        <div className="desc-inside buttons flex">
                            <button type="button" className="btn-remove flex" onClick={() => setCountProduct(countProduct > 1 ? countProduct - 1 : countProduct)}>
                                <Icon icon="minus" style_color="icon-gris-medio" />
                            </button>
                            <Text type="h3" style_type="text-title" styles_color="text-gris-oscuro" size="text-medium" content={`${countProduct}`} />
                            <button type="button" className="btn-add flex" onClick={() => setCountProduct(countProduct + 1)}>
                                <Icon icon="plus" style_color="icon-gris-medio" />
                            </button>
                        </div>
                        <Text type="h3" style_type="text-title" styles_color="text-gris-oscuro" size="text-medium" content={`$${countProduct === 0 ? item.price : item.price * countProduct}`} />
                    </div>
                    <Button type="button" type_style="violeta" value="Actualizar Carrito" size="auto" />
                </div>
            </div>
        </>
    )
}
