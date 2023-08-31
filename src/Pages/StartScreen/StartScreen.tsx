import { Link } from 'react-router-dom'
import { Button } from '../../Components/Buttons/Button'
import { Logo } from '../../Layouts/Logo/Logo'
import './StartScreen.css'

export const StartScreen = () => {
  return (
    <section className='logoSection flex'>
      <div className="startScreen-logo">
        <Logo />
      </div>
      <div className="startScreen-button">
        <Link to="/Login">
          <Button type_style={'violeta'} type={'button'} value={'Ingresar'} onClick={() => console.log('')} />
        </Link>
      </div>
    </section>
  )
}
