import { useEffect, useRef, useState } from 'react'

import './SearchBar.css'
import { Icon } from '../Icon/Icon'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../App/Slices/App/AppSlice'

export const SearchBar = () => {
    const dispatch = useDispatch()

    const [iconState, setIconState] = useState(true)
    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setSearch(searchValue))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setSearch(searchValue))
        }, 500)

        searchValue === '' ? setIconState(true) : setIconState(false)

        return () => clearTimeout(timer)
    }, [searchValue])

    return (
        <>
            <form className="searchBar-form" onSubmit={e => handleSubmit(e)}>
                <Icon icon={`search searchIcon ${iconState ? '' : 'inactive'}`} style_color='icon-gris-medio' />
                <input className='input-search' name='search' id='search' onChange={e => setSearchValue(e.target.value)} autoComplete='off' onFocus={() => setIconState(false)} />
                <Icon icon={`settings-sliders settingsIcon ${iconState ? '' : 'inactive'}`} style_color='icon-gris-medio' />
            </form>
        </>
    )
}
