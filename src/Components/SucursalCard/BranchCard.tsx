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
        phonenumber: string,
        schedule: string,
        email: string
    }
}

export const BranchCard = ( props: Props ) => {

  return (
    <div className='branchcard'>
      <input id="collapsible" className="toggle" type='checkbox' />
      <label htmlFor='collapsible' className='togglelabel'>
      <img className="companyimg" src={props.branch.imagesrc} />
      <div>
        <p className='company'>{props.branch.company}</p>
        <p className='branch'>{props.branch.branch}</p>
        <LocationIcon /><p className='details'>{props.branch.address}</p>
        </div>
        </label>
        
        <div className="collapsiblecontent">
          <PhoneIcon /><p className='details'>{props.branch.phonenumber}</p>
          <CalendarIcon /><p className='details'>{props.branch.schedule}</p>
          <MailIcon /><p className='details'>{props.branch.email}</p>
        </div>
      <Arrow />
    </div>
  )
}
