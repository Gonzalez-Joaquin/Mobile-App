import { WelcomeContent } from "../../Layouts/Welcome Layout/WelcomeContent"
import { Header } from "../../Layouts/Header/Header"

import './Welcome.css'
import { LoginLogo } from "../../Layouts/Login Layout/LoginLogo"

export const Welcome = () => {
    return (
        <>
            <article className="welcomeArticle flex">
                <div className="welcomeArticle-login-logo flex">
                    <LoginLogo />
                </div>
                <div className="welcomeArticle-container flex">
                    <Header />
                    <WelcomeContent />
                </div>
            </article>
        </>
    )
}

