import { useEffect, useState } from 'react'

import './SearchBar.css'
import { Icon } from '../Icon/Icon'

export const SearchBar = () => {

    const [iconState, setIconState] = useState(true)
    const [serachValue, setSearchValue] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(serachValue)
    }

    useEffect(() => {
        serachValue === '' ? setIconState(true) : setIconState(false)
    }, [serachValue])

    return (
        <>
            <form className="searchBar-form" onSubmit={e => handleSubmit(e)}>
                <Icon icon={`search searchIcon ${iconState ? '' : 'inactive'}`} />
                <input className='input-search' name='search' id='search' onChange={e => setSearchValue(e.target.value)} autoComplete='off' onFocus={() => setIconState(false)} />
                <Icon icon={`settings-sliders settingsIcon ${iconState ? '' : 'inactive'}`} />
            </form>
        </>
    )
}
