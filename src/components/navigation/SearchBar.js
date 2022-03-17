import './SearchBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateInput } from '../../redux/slices/searchInputSlice'
import { useEffect, useState } from 'react'
import _ from 'lodash'
import { BiSearch } from 'react-icons/bi'
import SearchResult from './SearchResult'


export default function SearchBar(){

    const placeholderString = "Search books by author, title or ISBN";
    const dispatch = useDispatch();

    const allBooks = useSelector((state) => state.allBooks.data);
    const [data,setData] = useState([]);

    const currentSearchInput = useSelector((state) => state.searchInput)
    useEffect(() => {
        const filteredBooks = []
       _.forEach(allBooks, function(value2,index){

        const formatedObject = _.mapValues(value2, _.method('toLowerCase'));
           if(_.includes(formatedObject, currentSearchInput.searchInput.toLowerCase())){
                filteredBooks.push(value2)
           }
       })
       setData(filteredBooks)
       console.log(filteredBooks)
        
        
    },[currentSearchInput, allBooks])

    
    
   
       
   
  

    return(
        
        <div className='searchbar-container'>
            <input className='searchbar-input' placeholder={placeholderString} onChange={(e)=> dispatch(updateInput(e.target.value))}/>
            <BiSearch className='search-icon' color='light-gray' />
            {data.length !== allBooks.length &&
                <div className='search-results-container'>
                    {data.length === 0 &&
                        <p className='no-results-text'>No results found</p>
                    }
                    {data.length !== allBooks.length &&
                        data.map((book)=>{
                            return <SearchResult data={book}  />
                        })
                    }
                </div>
            }
        </div>
       
        
    )
}