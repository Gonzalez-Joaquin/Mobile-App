import { Item } from "../../App/store/Slices/Items"

interface Props {
  item: Item
}

export const ListItem = ( props: Props ) => {
  return (
    <div>
        <div className="listitem">
            <img className="listitemimg" src={props.item.image} />
            <p className="listitemtitle">{props.item.title}</p>
            <p className="listitemid">Código {props.item.id}</p>

            <p className="listitemprice">{props.item.price}</p>
        </div>
    </div>
  )
}
