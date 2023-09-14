import { useDispatch } from "react-redux"
import { ApiItem } from "../../Interfaces/ItemsInterface"
import { AddButton } from "../Buttons/AddButton"

import './ListItem.css'
import { removeItem } from "../../App/Slices/App/AppSlice"
import { useNavigate } from "react-router-dom"

interface Props {
  item: ApiItem,
  flag: number,
  type: 'catalogue' | 'cart',
  flagsetter: React.Dispatch<React.SetStateAction<number>>
}

export const ListItem = ({ item, flag, flagsetter, type }: Props) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className="relative">
      <svg className={`removeItemitem ${type === 'cart' ? 'active' : ''}`} onClick={() => dispatch(removeItem(item.id))} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.402978 1.37534L3.80596 4.77832L0.402979 8.1813L1.3752 9.15352L4.77817 5.75054L8.18115 9.15352L9.15337 8.1813L5.75039 4.77832L9.15337 1.37534L8.18115 0.403125L4.77817 3.8061L1.3752 0.403124L0.402978 1.37534Z" fill="#98A0B6" />
      </svg>
      <div className="listitem flex" onClick={() => navigate(`/Preview/${item.id}`)}>
        <div className="listitemdata flex">
          <div className="listitemimg">
            <img className="listItemImg_IMG" src={item.image} />
          </div>
          <div className="listItemDataText">
            <p id="listitemtitle" className="listitemtitle">{`${item.title.length >= 27 ? item.title.slice(0, 20) + "..." : item.title}`}</p>
            <p className="listitemid">Código {item.id}</p>
            <p className="listitemprice">${item.price}</p>
          </div>
        </div>
      </div>
      <AddButton item={item} flag={flag} flagsetter={flagsetter} type={type} />
    </div>
  )
}
