import { useState } from "react"
import { Button } from "../../../Components/Buttons/Button"
import { Icon } from "../../../Components/Icon/Icon"
import { Text } from "../../../Components/Typography/Typography"

const dataProduct = {
    title: 'Pintura esmalte pintulux anticorrosivo gris litro',
    cod: '0008383939',
    price: 23000.00,
    desc: 'Z10 super cubritivo interior mate es un recubrimiento para interiores formulado con embulsioens acrilicas, dióxido de titanio y pigmentos extendedores'
}

export const ProductPreview_Desc = () => {

    const [countProduct, setCountProduct] = useState(1)

    return (
        <>
            <div className="pPArticle-content desc flex">
                <div className="pPArticle desc-item flex">
                    <div className="pPArticle desc-inside title flex">
                        <Text type="h3" style_type="text-title" content={dataProduct.title} styles_color="text-gris-oscuro" style_transform="text-capitalize" size="text-medium" />
                        <Icon icon='heart' style_color="icon-gris-medio" />
                    </div>
                    <div className="pPArticle desc-inside icon flex">
                        <Text type="h4" style_type="text-subtitle" content={`Código: ${dataProduct.cod}`} size="text-pre-medium" styles_color="text-gris-oscuro" />
                    </div>
                </div>
                <div className="pPArticle desc-item flex">
                    <div className="pPArticle desc-inside text">
                        <Text type="p" style_type="text-p" size="text-extra-small" content={dataProduct.desc} />
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
                        <Text type="h3" style_type="text-title" styles_color="text-gris-oscuro" size="text-medium" content={`$${countProduct === 0 ? dataProduct.price : dataProduct.price * countProduct}`} />
                    </div>
                    <Button type="button" type_style="violeta" value="Actualizar Carrito" size="auto" />
                </div>
            </div>
        </>
    )
}
