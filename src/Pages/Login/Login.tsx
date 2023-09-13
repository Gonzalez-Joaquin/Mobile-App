import { LoginForm } from '../../Layouts/Login Layout/LoginForm'
import { LoginLogo } from '../../Layouts/Login Layout/LoginLogo'
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

