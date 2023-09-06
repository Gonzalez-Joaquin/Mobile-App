import { Text } from "../Typography/Typography"
import { Icon } from "../Icon/Icon"

import { useState } from "react"

import './BranchCard.css'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../App/store"

interface Props {
  botonDeSalida?: boolean,
}

export const BranchCard = ({ botonDeSalida }: Props) => {

  const navigate = useNavigate()
  const [branchMode, setBranchMode] = useState(Boolean)

  const branch = useSelector((store: RootState) => store.branch)

  return (
    <div className={`branch-card ${branchMode ? 'open' : ''}`}>
      <div className="card-toggle flex">
        <div className="card-toggle-img">
          <img src={branch.imagesrc} className="card-img" />
        </div>
        <div className="card-toggle-data flex">
          <div className="card-toggle-data-top flex">
            <div className="card-toggle-data-text">
              <Text type="h3" style_type="text-title" content={branch.company} size="text-small" styles_color="text-gris-oscuro" />
              <Text type="p" style_type="text-p" content={branch.branch} styles_color="text-gris" size="text-extra-small" />
            </div>
            <div className={`card-toggle-data-icon ${botonDeSalida ? '' : 'inactive'}`} onClick={() => navigate('/Welcome')}>
              <Icon icon="sign-out-alt" style_color="icon-violeta" />
            </div>
          </div>
          <div className="card-toggle-data-bottom flex">
            <div className="card-toggle-location flex">
              <Icon icon="marker" />
              <Text type="h4" style_type="text-subtitle" content={branch.address} size="text-extra-small" styles_color="text-gris-oscuro" />
            </div>
            <button type="button" className="toggle-button flex" onClick={() => setBranchMode(!branchMode)} >
              <Icon icon={`angle-small-down ${branchMode ? 'close' : ''}`} style_color="icon-gris-medio" />
            </button>
          </div>
        </div>
      </div>
      <div className={`card-toggle-active flex ${branchMode ? 'open' : ''}`}>
        <div className="card-active-text flex">
          <Icon icon='phone-flip' style_color="icon-gris-medio" />
          <Text type="p" style_type="text-p" content={branch.phonenumber} styles_color="text-gris-oscuro" size="text-extra-small" />
        </div>
        <div className="card-active-text flex">
          <Icon icon='calendar-day' style_color="icon-gris-medio" />
          <Text type="p" style_type="text-p" content={branch.schedule} styles_color="text-gris-oscuro" size="text-extra-small" />
        </div>
        <div className="card-active-text flex">
          <Icon icon='envelope' style_color="icon-gris-medio" />
          <Text type="p" style_type="text-p" content={branch.email} styles_color="text-gris-oscuro" size="text-extra-small" />
        </div>
      </div>
    </div>
  )
}


// import { useState } from 'react'
// import { Arrow } from '../SVG/Arrow'
// import { CalendarIcon } from '../SVG/CalendarIcon'
// import { LocationIcon } from '../SVG/LocationIcon'
// import { MailIcon } from '../SVG/MailIcon'
// import { PhoneIcon } from '../SVG/PhoneIcon'
// import './BranchCard.css'

// interface Props {
//   branch: {
//     company: string,
//     branch: string,
//     imagesrc: string,
//     address: string,
//     addressmore: string,
//     phonenumber: string,
//     schedule: string,
//     email: string
//   }
// }

// export const BranchCard = (props: Props) => {

//   const [Expanded, setExpanded] = useState({
//     state: false,
//     value: props.branch.address + "."
//   })

//   const ExpandToggle = () => {
//     if (Expanded.state) {
//       document.getElementById("collapsible")?.click()
//       document.getElementById("arrow")?.classList.remove("arrowanimation")
//       setExpanded({
//         state: false,
//         value: props.branch.address + "."
//       })

//     }
//     else {
//       document.getElementById("collapsible")?.click()
//       document.getElementById("arrow")?.classList.add("arrowanimation")
//       setExpanded({
//         state: true,
//         value: props.branch.address + ", " + props.branch.addressmore
//       })

//     }
//   }

//   return (
//     <div className='branchcard' onClick={ExpandToggle}>
//       <input id="collapsible" className="toggle" type='checkbox' />
//       <div className='togglelabel'>
//         <img className="companyimg" src={props.branch.imagesrc} />
//         <div className='companydata'>
//           <p className='company'>{props.branch.company}</p>
//           <p className='branch'>{props.branch.branch}</p>
//           <div className='address'>
//             <LocationIcon /><span className='details'>{Expanded.value}</span>
//           </div>
//         </div>
//       </div>
//       <div className="collapsiblecontent">
//         <p className='details'><PhoneIcon />{props.branch.phonenumber}</p>
//         <div className='detailsdiv'>
//           <CalendarIcon /><span className='details'>{props.branch.schedule}</span>
//         </div>
//         <p className='details'><MailIcon />{props.branch.email}</p>
//       </div>
//       <Arrow />
//     </div>
//   )
// }
