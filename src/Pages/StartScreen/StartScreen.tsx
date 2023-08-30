import { Button } from '../../Components/Buttons/Button'
import { Logo } from '../../Layouts/Logo/Logo'
import './StartScreen.css'

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const StartScreen = ({ onClick }: Props) => {
  return (
    <section className='logoSection flex'>
      <div className="startScreen-logo">
        <Logo />
      </div>
      <div className="startScreen-button">
        <Button type_style={'violeta'} type={'button'} value={'Ingresar'} onClick={onClick} />
      </div>
    </section>
  )
}
