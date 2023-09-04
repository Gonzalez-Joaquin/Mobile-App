import { useState } from 'react'
import { Arrow } from '../SVG/Arrow'
import { CalendarIcon } from '../SVG/CalendarIcon'
import { LocationIcon } from '../SVG/LocationIcon'
import { MailIcon } from '../SVG/MailIcon'
import { PhoneIcon } from '../SVG/PhoneIcon'
import './BranchCard.css'

interface Props {
    branch: {
        company: string,
        branch: string,
        imagesrc: string,
        address: string,
        addressmore: string,
        phonenumber: string,
        schedule: string,
        email: string
    }
}

export const BranchCard = ( props: Props ) => {

  const [Expanded, setExpanded] = useState({
    state: false,
    value: props.branch.address + "."
  })

  const ExpandToggle = () => {
    if(Expanded.state){
      document.getElementById("collapsible")?.click()
      document.getElementById("arrow")?.classList.remove("arrowanimation")
      setExpanded({
        state: false,
        value: props.branch.address + "."
      })
    
    }
    else {
      document.getElementById("collapsible")?.click()
      document.getElementById("arrow")?.classList.add("arrowanimation")
        setExpanded({
          state: true,
        value: props.branch.address + ", " + props.branch.addressmore
        })
    
    }
  }

  return (
    <div className='branchcard' onClick={ExpandToggle}>
      <input id="collapsible" className="toggle" type='checkbox' />
      <div className='togglelabel'>
      <img className="companyimg" src={props.branch.imagesrc} />
      <div className='companydata'>
        <p className='company'>{props.branch.company}</p>
        <p className='branch'>{props.branch.branch}</p> 
        <div className='address'>
        <LocationIcon /><span className='details'>{Expanded.value}</span>
        </div>
        </div>
        </div>
        
        <div className="collapsiblecontent">
          <p className='details'><PhoneIcon />{props.branch.phonenumber}</p>
          <div className='detailsdiv'>
          <CalendarIcon /><span className='details'>{props.branch.schedule}</span>
          </div>
          <p className='details'><MailIcon />{props.branch.email}</p>
        </div>

        <Arrow />
    </div>
  )
}
