import { Text } from '../Typography/Typography'
import { Icon } from '../Icon/Icon'

import './Buttons.css'

interface Props {
    type_style: 'violeta' | 'blanco' | 'inactivo',

    type: 'button' | 'submit',

    size?: 'large' | 'auto',

    icon_right?: string,

    icon_left?: string,

    value: string

    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ onClick, type, type_style, value, icon_right, icon_left, size }: Props) => {

    const classNames = `btn ${type_style || ''} ${size || ''} flex`

    return (
        <>
            <button className={classNames} onClick={onClick} type={type}>
                {icon_left !== '' ? <Icon icon={icon_left || ''} /> : ''}
                <Text type={'p'} style_type={'text-button'} content={value} size={'text-small'} styles_color={'text-blanco'} />
                {icon_right !== '' ? <Icon icon={icon_right || ''} /> : ''}
            </button>
        </>
    )
}
