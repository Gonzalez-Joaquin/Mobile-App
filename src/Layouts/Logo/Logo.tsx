import { Text } from "../../Components/Typography/Typography"
import './Logo.css'

export const Logo = () => {
  return (
    <>
      <div className="logodiv flex">
        <img src="src/Assets/shop.png" className='logo'></img>
        <br />
        <Text type="p" style_type='text-p' content='Store App' styles_color={'text-gris'} />
      </div>
    </>
  )
}
