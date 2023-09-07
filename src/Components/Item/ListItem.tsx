import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../App/store"
import { AddButton } from "../Buttons/AddButton"
import { useState } from "react"
import { incrementItem } from "../../App/Slices/App /AppSlice"
import './ListItem.css'
import { ApiItem } from "../../Interfaces/ItemsInterface"
import { useNavigate } from "react-router-dom"

interface Props {
  item: ApiItem,
  flag: number,
  flagsetter: React.Dispatch<React.SetStateAction<number>>
}

export const ListItem = ( props: Props ) => {
  
  let title = props.item.title

  if(title.length > 27){
    title = title.slice(0, 27) + "..."
  }

  

  return (
    <div className="relative">
      <div className="listitem">
        <div className="listitemdata">
            <img className="listitemimg" src={props.item.image} />
            <div>
            <p id="listitemtitle" className="listitemtitle">{title}</p>
            <p className="listitemid">Código {props.item.id}</p>
            <p className="listitemprice">{props.item.price}</p>
            </div>
        </div>
        
        </div>
        <AddButton item={props.item} flag={props.flag} flagsetter={props.flagsetter} type="catalogue" />
    </div>
  )
}
