import { useParams } from "react-router-dom"
import { ProductPreviewContent } from "../../Layouts/Product Layout/ProductPreviwContent"

export const Product = () => {

    const { id } = useParams()

    const numberId = parseInt(id || '0')

    return <ProductPreviewContent id={numberId} />
}
