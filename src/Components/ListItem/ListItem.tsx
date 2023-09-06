import { useSelector } from "react-redux"
import { Item } from "../../App/store/Slices/Items"
import { AddButton } from "../Buttons/AddButton"
import './ListItem.css'
import { RootState } from "../../App/store/store"

interface Props {
  item: Item
}

export const ListItem = ( props: Props ) => {
  if(props.item.title.length > 27){
    props.item.title = props.item.title.slice(0, 27) + "..."
  }
  const apiItem = useSelector((store: RootState) => store.items.items)
  return (
    <div className="relative">
      <div className="listitem">
        <div className="listitemdata">
            <img className="listitemimg" src={props.item.image} />
            <div>
            <p id="listitemtitle" className="listitemtitle">{props.item.title}</p>
            <p className="listitemid">Código {props.item.id}</p>
            <p className="listitemprice">{props.item.price}</p>
            </div>
        </div>
        
        </div>
        <AddButton />
    </div>
  )
}
