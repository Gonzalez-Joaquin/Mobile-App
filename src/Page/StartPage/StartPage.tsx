import { Logo } from '../../Layout/Logo/Logo'
import './StartPage.css'

export const StartPage = () => {
  return (
    <>
    <section className='startpagelogosection'>
        <Logo />
    </section>
    <button>Ingresar</button> <br/> <br/>
    <button>Crear Cuenta</button> <br/> <br/> <br/>
    <button>Continuar como invitado</button>
    </>
  )
}
