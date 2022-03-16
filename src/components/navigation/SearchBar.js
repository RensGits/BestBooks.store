import './SearchBar.css'
import { BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { updateInput } from '../../redux/slices/searchInputSlice'

export default function SearchBar(){

    const placeholderString = "Search books by author, title or ISBN"
    const dispatch = useDispatch();
   

    return(
        <div className='searchbar-container'>
            <input className='searchbar-input' placeholder={placeholderString} onChange={(e)=> dispatch(updateInput(e.target.value))}/>
            <BiSearch className='search-icon' color='light-gray' />
        </div>
    )
}