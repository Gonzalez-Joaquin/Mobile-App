import { useEffect, useState } from 'react'

import './SearchBar.css'
import { Icon } from '../Icon/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../App/store'
import { setSearchedItems } from '../../App/Slices/Search/Search'

export const SearchBar = () => {

    const dispatch = useDispatch()
    
    const [iconState, setIconState] = useState(true)
    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const items = useSelector((store: RootState) => store.items.items)
    

    useEffect(() => {
        searchValue === '' ? setIconState(true) : setIconState(false)
    }, [searchValue])

    
    

  useEffect(() => {
       dispatch(setSearchedItems(items.filter(item => item.title.toUpperCase().includes(searchValue.toUpperCase()))))
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
