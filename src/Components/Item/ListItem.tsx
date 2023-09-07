import { AddButton } from "../Buttons/AddButton"

import './ListItem.css'
import { ApiItem } from "../../Interfaces/ItemsInterface"
import { Text } from "../Typography/Typography"

interface Props {
  item: ApiItem,
  flag: number,
  flagsetter: React.Dispatch<React.SetStateAction<number>>
}

export const ListItem = (props: Props) => {
  return (
    <div className="relative">
      <div className="listitem flex">
        <div className="listitemdata flex">
          <div className="listitemimg-container">
            <img className="listitemimg" src={props.item.image} />
          </div>
          <div>
            <Text type="p" style_type="text-p" content={props.item.title.length > 27 ? `${props.item.title.slice(0, 27)}...` : props.item.title} size="text-extra-small" styles_color="text-gris-oscuro" />
            <Text type="p" style_type="text-p" content={`Código ${props.item.id}`} size="text-extra-small" styles_color="text-gris-oscuro" />
            <Text type="p" style_type="text-p" content={`${props.item.price}`} size="text-extra-small" styles_color="text-gris-oscuro" />
          </div>
        </div>
      </div>
      <AddButton item={props.item} flag={props.flag} flagsetter={props.flagsetter} />
    </div>
  )
}
