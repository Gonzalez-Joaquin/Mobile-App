import { ListItem } from "../../Components/Item/ListItem"
import { ProductPreviewContent } from "../../Layouts/Product Layout/ProductPreviwContent"

interface Props {
    type: 'item' | 'view',
}

export const Product = ({ type }: Props) => {
    return type === 'view' ? <ProductPreviewContent /> : <ListItem />
}
