import { Button } from "../../../Components/Buttons/Button"
import { InputForm } from "../../../Components/Inputs/InputForm/InputForm"
import { Links } from "../../../Components/LInks/Links"
import { Text } from "../../../Components/Typography/Typography"

export const LoginForm = () => {
    return (
        <>
            <form className="loginArticle-form flex">
                <div className="formField flex">
                    <Text type={"h3"} style_type={"text-title"} content={"¡Hola de nuevo!"} size={'text-medium'} styles_color={'text-gris'} />
                    <InputForm label={'email'} placeHolder="Ingresa tu email" type="email" />
                    <InputForm label={'contraseña'} placeHolder={'Ingresa tu contraseña'} type={'password'} />
                    <div className="formFiel-item flex">
                        <InputForm label={'Recordame'} type={'checkbox'} />
                        <Links value={'Recordar contraseña'} onClick={() => console.log('recordar contraseña')} />
                    </div>
                    <Button type_style={"violeta"} type={"submit"} value={"Ingresar"} onClick={() => console.log('aki')} />
                </div>
            </form>
        </>
    )
}
