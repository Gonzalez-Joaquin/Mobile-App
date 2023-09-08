import { ProductPreviewContent } from "../../Layouts/Product Layout/ProductPreviwContent"

interface Props {
    type: 'item' | 'view',
}

export const Product = ({ type }: Props) => {

    console.log(type)

    return <ProductPreviewContent />
}
