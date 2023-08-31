import { Icon } from '../../Components/Icon/Icon'
import './Header.css'

export const Header = () => {
    return (
        <>
            <header className="header flex">
                <button type="button" className="userButton flex">
                    <Icon icon='user' />
                </button>
            </header>
        </>
    )
}
