import { Item } from "../../App/store/Slices/Items"
import { AddButton } from "../SVG/AddButton"
import './ListItem.css'

interface Props {
  item: Item
}

export const ListItem = ( props: Props ) => {
  if(props.item.title.length > 27){
    props.item.title = props.item.title.slice(0, 27) + "..."
  }
  return (
    <div>
        <div className="listitem">
            <img className="listitemimg" src={props.item.image} />
            <div>
            <p id="listitemtitle" className="listitemtitle">{props.item.title}</p>
            <p className="listitemid">Código {props.item.id}</p>
            <p className="listitemprice">{props.item.price}</p>
            <AddButton
            </div>
        </div>
    </div>
  )
}
