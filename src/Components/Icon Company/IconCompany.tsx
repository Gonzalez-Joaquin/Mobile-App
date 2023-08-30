import google from '../../../public/Svg/google.svg'
import aplle from '../../../public/Svg/apple.svg'
import facebook from '../../../public/Svg/facebook.svg'
import './Icon.css'

interface propsIcon {
    name_icon: 'google' | 'apple' | 'facebook',
}

export const IconCompany = ({ name_icon }: propsIcon) => {

    const iconType = {
        google: google,
        apple: aplle,
        facebook: facebook
    }

    return (
        <img src={iconType[name_icon]} className="svg-icon" />
    )
}