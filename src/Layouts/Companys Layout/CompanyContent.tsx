import { Link } from "react-router-dom"
import { Button2 } from "../../Components/Buttons/Button2"
import { Text } from "../../Components/Typography/Typography"

export const CompanyContent = () => {
    return (
        <>
            <div className="companysArticle-content content flex">
                <Text type={"h3"} style_type={"text-title"} content={"Elige una opción para agregar productos a tu pedido"} styles_color="text-gris-oscuro" size="text-pre-medium" />
                <Link to={'/ProductPreview'}>
                    <Button2 icon="ballot" titleButton="Catálogo" textButton="Podrás ver todo el catálogo de productos de esta sucursal" onClick={() => console.log('aki')} />
                </Link>
            </div>
        </>
    )
}
