import { LoginForm } from '../../Layouts/Login Layout/Form/LoginForm'
import { LoginLogo } from '../../Layouts/Login Layout/Logo/LoginLogo'
import './Login.css'

export const Login = () => {
    return (
        <>
            <article className="loginArticle flex">
                <LoginLogo />
                <LoginForm />
            </article>
        </>
    )
}

