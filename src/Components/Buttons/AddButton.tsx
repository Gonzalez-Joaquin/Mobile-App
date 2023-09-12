import { useEffect, useState } from 'react'
import './AddButton.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../App/store'
import { decrementItem, incrementItem } from '../../App/Slices/App/AppSlice'
import { ApiItem } from '../../Interfaces/ItemsInterface'
import getItemQuantity from '../../Hooks/getItemsQuantity'

interface Props {
  item: ApiItem,
  type: 'catalogue' | 'cart'
  flag: number,
  flagsetter: React.Dispatch<React.SetStateAction<number>>
}

export const AddButton = (props: Props) => {

  const dispatch = useDispatch()
  const carrito = useSelector((store: RootState) => store.app.carrito)

  const [ButtonState, setButtonState] = useState('closed')
  const [count, setCount] = useState(getItemQuantity(props.item.id, carrito))

  const handleClick = () => {
    setButtonState('open')
    props.flagsetter(props.item.id)
  }

  useEffect(() => {
    if (props.flag !== props.item.id) {
      if (count > 0) {
        setButtonState('unfocused')
      }
      else {
        setButtonState('closed')
      }
    }
  }, [props.flag])

  useEffect(() => {
    if (count === 0) {
      setButtonState('closed')
    }
  }, [count])

  useEffect(() => {
    setCount(getItemQuantity(props.item.id, carrito))
  }, [])

  useEffect(() => {
    setCount(getItemQuantity(props.item.id, carrito))
  }, [carrito])

  if (props.type === 'catalogue') {
    return (
      <div>
        <button className={`AddButton ${ButtonState === 'open' ? 'buttonactive' : ''} ${ButtonState === 'unfocused' ? 'unfocused' : ''}`} onClick={handleClick}>
          {count > 1 && (
            <svg className={`iconhide ${ButtonState === 'open' ? 'iconshow' : ''}`} onClick={() => dispatch(decrementItem(props.item.id))} width="14" height="2" viewBox="0 0 14 2" fill="#fffff" xmlns="http://www.w3.org/2000/svg">
              <line y1="1.25" x2="14" y2="1.25" stroke="white" strokeWidth="1.5" />
            </svg>
          )}
          {count === 1 && (
            <svg className={`iconhide ${ButtonState === 'open' ? 'iconshow' : ''}`} onClick={() => dispatch(decrementItem(props.item.id))} width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.23703 13.0949C1.26479 13.5466 1.4697 13.9691 1.80709 14.2706C2.14448 14.5721 2.58718 14.7281 3.03893 14.7049H10.2438C10.694 14.7279 11.1354 14.5728 11.4723 14.273C11.8092 13.9733 12.0147 13.5529 12.0444 13.1028V5.08137C12.0147 4.63127 11.8092 4.21096 11.4723 3.91121C11.1354 3.61146 10.694 3.45634 10.2438 3.47935H3.03893C2.58847 3.45603 2.14688 3.61101 1.80972 3.91079C1.47255 4.21057 1.26679 4.63107 1.23703 5.08137V13.0949ZM12.0457 1.07688H9.79392L9.15483 0.509992C8.97851 0.361719 8.75504 0.28131 8.52473 0.283241H4.75908C4.52874 0.28121 4.30524 0.361631 4.12898 0.509992L3.48989 1.07688H1.23827C1.12506 1.06339 1.01023 1.07405 0.901435 1.10817C0.792642 1.14229 0.692321 1.19909 0.607067 1.27483C0.521812 1.35057 0.453497 1.44352 0.406763 1.54757C0.360029 1.65162 0.335938 1.76439 0.335938 1.87846C0.335938 1.99253 0.360029 2.1053 0.406763 2.20935C0.453497 2.3134 0.521812 2.40636 0.607067 2.48209C0.692321 2.55783 0.792642 2.61463 0.901435 2.64875C1.01023 2.68287 1.12506 2.69354 1.23827 2.68004H12.0468C12.1595 2.69279 12.2736 2.68158 12.3817 2.64714C12.4898 2.61271 12.5894 2.55581 12.674 2.4802C12.7586 2.40458 12.8263 2.31194 12.8726 2.20835C12.919 2.10475 12.943 1.99253 12.943 1.87903C12.943 1.76553 12.919 1.65331 12.8726 1.54971C12.8263 1.44611 12.7586 1.35347 12.674 1.27785C12.5894 1.20224 12.4898 1.14536 12.3817 1.11092C12.2736 1.07648 12.1595 1.06526 12.0468 1.07801L12.0457 1.07688Z" fill="white" />
            </svg>
          )}
          <span className={`addbuttontext iconhide ${ButtonState === 'open' ? 'iconshow' : ''} ${ButtonState === 'unfocused' ? 'iconshow textshow' : ''}`}>{count}</span>
          <svg className={`${ButtonState === 'unfocused' ? 'iconhide' : ''}`} onClick={() => dispatch(incrementItem(props.item.id))} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.56255 0V6.56255H0V8.43745H6.56255V15H8.43745V8.43745H15V6.56255H8.43745V0H6.56255Z" fill="white" />
          </svg>
        </button>
      </div>
    )
  }
  else {
    return (
      <div>
        <div className="ItemButtons">
          <svg className="minus" onClick={() => dispatch(decrementItem(props.item.id))} width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="-6.55671e-08" y1="1.25" x2="11" y2="1.25" stroke="#98A0B6" strokeWidth="1.5" />
          </svg>
          <span className="normalcount">{count}</span>
          <svg className="plus" onClick={() => dispatch(incrementItem(props.item.id))} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.81254 0V4.81254H0V6.18746H4.81254V11H6.18746V6.18746H11V4.81254H6.18746V0H4.81254Z" fill="#8381FF" />
          </svg>
        </div>
      </div>
    )
  }
}
