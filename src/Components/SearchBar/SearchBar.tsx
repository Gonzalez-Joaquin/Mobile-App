import { useEffect, useState } from 'react'

import './SearchBar.css'

import { Icon } from '../Icon/Icon'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../App/Slices/App/AppSlice'
import { Text } from '../Typography/Typography'

export const SearchBar = () => {
    const dispatch = useDispatch()


    const [searchValue, setSearchValue] = useState('')
    const [type, setType] = useState('name')
    const [mode, setMode] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setSearch({ value: searchValue, type: type }))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setSearch({ value: searchValue, type: type }))
        }, 500)

        return () => clearTimeout(timer)
    }, [searchValue, type])

    return (
        <>
            <form className="searchBar-form" onSubmit={e => handleSubmit(e)}>
                <Icon icon={`search searchIcon`} style_color='icon-gris-medio' />
                <input className='input-search' name='search' id='search' onChange={e => setSearchValue(e.target.value)} autoComplete='off' />
                <div className="settings-container">
                    <button type="button" className='btn-settings flex' onClick={() => setMode(!mode)}>
                        <Icon icon={`${mode ? 'cross' : 'settings-sliders'} settingsIcon`} style_color='icon-gris-medio' />
                    </button>
                    <div className={`setting-inside flex ${mode ? 'active' : ''}`}>
                        <button type="button" className="btn-search-by-type" onClick={() => setType('name')}>
                            <Text type='h3' style_type='text-button' content='Nombre' styles_color='text-gris-oscuro' />
                        </button>
                        <button type="button" className="btn-search-by-type" onClick={() => setType('id')}>
                            <Text type='h3' style_type='text-button' content='Código' styles_color='text-gris-oscuro' />
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
