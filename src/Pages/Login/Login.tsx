import { LoginForm } from '../../Layouts/Login Layout/LoginForm'
import { LoginLogo } from '../../Layouts/Login Layout/LoginLogo'
import './Login.css'

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Login = ({ onClick }: Props) => {
    return (
        <>
            <article className="loginArticle flex">
                <LoginLogo />
                <LoginForm onClick={onClick} />
            </article>
        </>
    )
}

