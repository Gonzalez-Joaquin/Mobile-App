import { Text } from "../../Typography/Typography"

import './InputForm.css'

interface Props {
    type: 'email' | 'password' | 'text' | 'checkbox',

    placeHolder?: string,

    label: string,
}

export const InputForm = ({ type, label, placeHolder }: Props) => {
    return (
        <>
            {type === 'checkbox' && (
                <div className="formFiel-inputs check flex">
                    <div className="checkbox-wrapper-4">
                        <input className="inp-cbx" id={label} type="checkbox" />
                        <label className="cbx" htmlFor={label}>
                            <span><svg width="12px" height="10px"><use href="#check-4"></use></svg></span><span>{label}</span>
                        </label>
                        <svg className="inline-svg">
                            <symbol id="check-4" viewBox="0 0 12 10">
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </symbol>
                        </svg>
                    </div>
                </div>
            )}
            {
                type !== 'checkbox' && (
                    <div className="formFiel-inputs flex">
                        <Text type={'label'} style_type={'text-label'} content={label} size={'text-extra-small'} styles_color={'text-gris'} style_transform={'text-capitalize'} />
                        <input type={type} name={label} id={label} className="inputForm" placeholder={placeHolder} />
                    </div>
                )
            }
        </>
    )
}