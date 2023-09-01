import { Link } from 'react-router-dom'
import { CartCounter } from '../../Components/CartCounter/CartCounter'
import { Icon } from '../../Components/Icon/Icon'
import { Text } from '../../Components/Typography/Typography'
import './Header.css'

interface Props {
    header: 'welcome' | 'app' | 'peviewProduct',
}

const Welcome = () => {
    return (
        <>
            <div className="hWelcome flex">
                <button type="button" className="userButton flex">
                    <Icon icon='user' />
                </button>
            </div>
        </>
    )
}

const App = () => {
    return (
        <>
            <div className="hApp-ctn flex">
                <button type="button" className="userButton flex">
                    <Icon icon='user' />
                </button>
                <Text type='p' style_type='text-subtitle' size='text-medium' content='Sucursal escaneada' styles_color='text-blanco' />
                <div className="hApp-item flex">
                    <Icon icon='shopping-cart' />
                    <CartCounter />
                </div>
            </div>
        </>
    )
}

const PeviewProduct = () => {
    return (
        <>
            <div className="hPreviewProduct-ctn flex">
                <Link to={'/Company'}>
                    <Icon icon="arrow-left" style_color="icon-gris-medio" />
                </Link>
            </div>
        </>
    )
}

export const Header = ({ header }: Props) => {
    return (
        <>
            <header className="header flex">
                {header === 'welcome' && (
                    <Welcome />
                )}
                {header === 'app' && (
                    <App />
                )}
                {header === 'peviewProduct' && (
                    <PeviewProduct />
                )}
            </header>
        </>
    )
}
