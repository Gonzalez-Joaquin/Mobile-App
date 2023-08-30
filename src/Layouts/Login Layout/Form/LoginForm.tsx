import { useState } from "react"
import { Button } from "../../../Components/Buttons/Button"
import { IconCompany } from "../../../Components/Icon Company/IconCompany"
import { InputForm } from "../../../Components/Inputs/InputForm/InputForm"
import { Links } from "../../../Components/LInks/Links"
import { Text } from "../../../Components/Typography/Typography"

export const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkBox, setCheckBox] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        action()
    }

    const action = () => {
        console.log(email, password, checkBox)
    }

    return (
        <>
            <form className="loginArticle-form flex" onSubmit={handleSubmit}>
                <div className="formField form flex">
                    <Text type={"h3"} style_type={"text-title"} content={"¡Hola de nuevo!"} size={'text-medium'} styles_color={'text-gris'} />
                    <InputForm label={'email'} placeHolder="Ingresa tu email" type="email" onChange={(e: string) => setEmail(e)} />
                    <InputForm label={'contraseña'} placeHolder={'Ingresa tu contraseña'} type={'password'} onChange={(e: string) => setPassword(e)} />
                    <div className="formFiel-item flex">
                        <InputForm label={'Recordame'} type={'checkbox'} onChange={(e: string) => setCheckBox(e)} />
                        <Links value={'Recordar contraseña'} onClick={() => console.log('recordar contraseña')} />
                    </div>
                    <Button type_style={"violeta"} type={"submit"} value={"Ingresar"} onClick={action} />
                </div>
                <div className="formField social flex">
                    <div className="formFiel social-item shapeText flex">
                        <div className="lineLogin-shape"></div>
                        <Text type="label" style_type="text-title" content="o ingresa con" />
                    </div>
                    <div className="formFiel social-item social flex">
                        <button type="button" className="companyButton">
                            <IconCompany name_icon="google" />
                        </button>
                        <button type="button" className="companyButton">
                            <IconCompany name_icon="facebook" />
                        </button>
                        <button type="button" className="companyButton">
                            <IconCompany name_icon="apple" />
                        </button>
                    </div>
                    <div className="formFiel social-item text flex">
                        <Text type={'label'} style_type={'text-label'} content={'¿No tienes cuenta?'} />
                        <Links value={'Registrate Aquí'} onClick={() => console.log('recordar contraseña')} />
                    </div>
                </div>
            </form>
        </>
    )
}
