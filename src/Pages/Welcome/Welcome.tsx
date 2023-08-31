import { WelcomeContent } from "../../Layouts/Welcome Layout/WelcomeContent"
import { Header } from "../../Layouts/Header/Header"

import './Welcome.css'
import { LoginLogo } from "../../Layouts/Login Layout/LoginLogo"

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Welcome = ({ onClick }: Props) => {
    return (
        <>
            <article className="welcomeArticle flex">
                <div className="welcomeArticle-login-logo flex">
                    <LoginLogo />
                </div>
                <div className="welcomeArticle-container flex">
                    <Header header="welcome" />
                    <WelcomeContent onClick={onClick} />
                </div>
            </article>
        </>
    )
}

