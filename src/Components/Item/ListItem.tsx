import { useSelector } from "react-redux"
import { RootState } from "../../App/store"

export const ListItem = () => {

  const apiItem = useSelector((store: RootState) => store.items.items)

  const item = apiItem[0]

  return (
    <div>
      <div className="listitem">
        <img className="listitemimg" src={item.image} />
        <p className="listitemtitle">{item.title}</p>
        <p className="listitemid">Código {item.id}</p>
        <p className="listitemprice">{item.price}</p>
      </div>
    </div>
  )
}
