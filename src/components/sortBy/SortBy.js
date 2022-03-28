import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { sortBy } from '../../redux/slices/sortBySlice';
import './SortBy.css'

export default function SortBy(){ //SORTBY COMPONENT FOR SORTING BOOKS OR ARTICLES
    
    const options = ['author asc','author desc','rank asc','rank desc']
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(sortBy(e.target.value))
    }


    return(
        <div className='sortby-container'>
            <p>sort by</p>
            <select onChange={handleChange} defaultValue={'rank asc'} className='sortby-select' name="" id="">
                {
                    options.map((option, index) => {
                        return <option 
                                    key={option+index} 
                                    value={option}>
                                    {option}
                                </option>
                    })
                }
            </select>
        </div>
    )
}
