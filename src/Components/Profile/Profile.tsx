import { useDispatch, useSelector } from "react-redux"
import { Text } from "../Typography/Typography"
import { RootState } from "../../App/store"
import { Icon } from "../Icon/Icon"
import { useEffect, useState } from "react"

import './Profie.css'
import { userLogOut } from "../../App/Slices/User/userSlice"
import { useNavigate } from "react-router-dom"

interface Props {
    getmode: boolean
}

export const Profile = ({ getmode }: Props) => {

    const [mode, setMode] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const username = useSelector((store: RootState) => store.users.users.username)

    useEffect(() => {
        setMode(getmode)
    }, [getmode])

    const handleClick = () => {
        dispatch(userLogOut())
        navigate('/')
    }

    return (
        <div className={`profile-container flex ${mode ? 'active' : ''}`}>
            <div className="card-left flex">
                <div className="card-top flex">
                    <div className="shapeProfileImg grid">
                        <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5962 14.4102C5.47077 14.4102 0.503906 19.3772 0.503906 25.5025H22.6893C22.6893 19.3754 17.7236 14.4102 11.5962 14.4102Z" fill="#98A0B6" />
                            <path d="M11.5971 0.0830078C14.992 0.0830078 17.7437 2.83399 17.7437 6.22766C17.7437 9.62416 14.9924 12.3746 11.5971 12.3746C8.20184 12.3746 5.4502 9.62358 5.4502 6.22766C5.4502 2.83374 8.20184 0.0830078 11.5971 0.0830078Z" fill="#98A0B6" />
                        </svg>
                    </div>
                    <div className="shapeProfileText">
                        <Text type="h3" style_type="text-title" content="Hola" styles_color="text-gris" />
                        <Text type="h3" style_type="text-title" content={username} styles_color="text-gris-oscuro" style_transform="text-capitalize" />
                    </div>
                </div>
                <div className="card-bottom">
                    <button type="button" className="btn-logout flex" onClick={() => handleClick()} >
                        <Icon icon="sign-out-alt" style_color="icon-gris-medio" />
                        <Text type="h3" style_type="text-title" styles_color="text-gris-oscuro" size="text-small" content="Cerrar sesión" />
                    </button>
                </div>
            </div>
            <div className={`card-right ${mode ? 'active' : 'inactive'}`} onClick={() => setMode(!mode)}></div>
        </div>
    )
}
