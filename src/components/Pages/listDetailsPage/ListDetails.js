
import './ListDetails.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ListHeader from '../../list/ListHeader'
import { getBook } from '../../../redux/slices/allBooksSlice'

export default function ListDetails(){
    
    const location = useLocation() // state (props) passed down from Link component
    const locationProps = location.state
    
    
    return(
        <>
            <div className='lists-spacer'></div>
            <div className='listdetails-container'>
                <ListHeader listName={locationProps.listName}  />
                
            </div>
        </>
    )
}