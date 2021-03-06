import './SearchBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateInput } from '../../redux/slices/searchInputSlice'
import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import SearchResult from './SearchResult'
import _ from 'lodash'


export default function SearchBar(){

    const placeholderString = "Search books by author, title or ISBN";
    const dispatch = useDispatch();

    const allBooks = useSelector((state) => state.allBooks.data);
    const [data,setData] = useState([]);
    const [blur,setBlur] = useState(true)

    const currentSearchInput = useSelector((state) => state.searchInput)
    useEffect(() => {
        const filteredBooks = []
       _.forEach(allBooks, function(value){ // maps over all books

        const formatedObject = _.mapValues(value, _.method('toLowerCase')); // sets all values in book objects to lowercase
        if(currentSearchInput.searchInput.length > 0){
           if(_.includes(formatedObject.title, currentSearchInput.searchInput.toLowerCase())){ // pushes book to temporary array if searchinput matches title
                filteredBooks.push(value)
                }
           if(_.includes(formatedObject.author, currentSearchInput.searchInput.toLowerCase())){ // pushes book to temporary array if searchinput matches author
            filteredBooks.push(value)   
                }
            if(_.includes(formatedObject.primary_isbn10, currentSearchInput.searchInput.toLowerCase())){ // pushes book to temporary array if searchinput matches isbn10
                filteredBooks.push(value)
                }
            if(_.includes(formatedObject.primary_isbn13, currentSearchInput.searchInput.toLowerCase())){ // pushes book to temporary array if searchinput matches isbn13
                filteredBooks.push(value)
                }
            }
       })
       setData(_.uniq(filteredBooks)) // sets temporary array to local state & filters duplicates
    },[currentSearchInput, allBooks])

    return(
        
        <div className='searchbar-container'>
            <input 
                className='searchbar-input' 
                placeholder={placeholderString} 
                onChange={(e)=> dispatch(updateInput(e.target.value))}
                onBlur={() => setBlur(true)}
                onFocus={() => setBlur(false)}/>
                
            <BiSearch className='search-icon' color='light-gray' />
            {(data.length !== allBooks.length && data.length !== 0) &&
                <div className='search-results-wrapper'  >
                    
                    <div className='search-results-container' onMouseDown={(e) => e.preventDefault()}>
                    {(data.length === 0 && !blur) &&   // returns no results found if filteredBooks state object is empty
                        <p className='no-results-text'>No results found</p>
                    }
                    {(data.length !== allBooks.length && !blur) && // returns searchresult for each object in filteredBooks state object
                        data.map((book)=>{
                            return <SearchResult data={book}  />
                        })
                    }
                </div>
                </div>
            }
        </div>  
    )
}