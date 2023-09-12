import { useEffect, useState } from "react"
import { Button } from "../../Components/Buttons/Button"
import { IconCompany } from "../../Components/Icon Company/IconCompany"
import { InputForm } from "../../Components/Inputs/InputForm/InputForm"
import { Links } from "../../Components/Links/Links"
import { Text } from "../../Components/Typography/Typography"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../App/store"
import { loginUser } from "../../App/Slices/User/thunks"
import { useNavigate } from "react-router-dom"
import { Loading_Button } from "../../Components/Buttons/Loading_Button"

export const LoginForm = () => {

    const navigate = useNavigate()
    const user = useSelector((store: RootState) => store.users)
    const dispatch = useDispatch<AppDispatch>()

    const [loadingState, setLoadingState] = useState(Boolean)
    const [buttonState, setButtonState] = useState(Boolean)
    const [userName, setUserName] = useState('johnd')
    const [password, setPassword] = useState('m38rmF$')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(loginUser(userName, password))
    }

    useEffect(() => {
        if (user.login) {
            navigate('/Welcome')
        }

        setLoadingState(user.isLoading)

    }, [user])

    useEffect(() => {
        if (userName !== '' && password !== '') {
            setButtonState(true)
        } else {
            setButtonState(false)
        }
    }, [userName, password])

    return (
        <>
            <form className="loginArticle-form flex" onSubmit={handleSubmit}>
                <div className="formField form flex">
                    <Text type={"h3"} style_type={"text-title"} content={"¡Hola de nuevo!"} size={'text-medium'} styles_color={'text-gris'} />
                    <InputForm label={'Usuario'} placeHolder="Ingresa tu usuario" type="text" onChange={(e: string) => setUserName(e)} />
                    <InputForm label={'contraseña'} placeHolder={'Ingresa tu contraseña'} type={'password'} onChange={(e: string) => setPassword(e)} />
                    <div className="formFiel-item flex">
                        <InputForm label={'Recordame'} type={'checkbox'} onChange={() => console.log('hola')} />
                        <Links value={'Recordar contraseña'} onClick={() => console.log('recordar contraseña')} />
                    </div>
                    <div className="form-field-button flex">
                        <Loading_Button active={loadingState} />
                        <Button type_style={buttonState ? 'violeta' : 'inactivo'} type={"submit"} value={"Ingresar"} />
                    </div>
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