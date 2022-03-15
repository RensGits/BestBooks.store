import './SearchBar.css'
import { BiSearch } from 'react-icons/bi'

export default function SearchBar(){

    const placeholderString = "Search books by author, title or ISBN"

    return(
        <div className='searchbar-container'>
            <input className='searchbar-input' placeholder={placeholderString}/>
            <BiSearch className='search-icon' color='light-gray' />
        </div>
    )
}