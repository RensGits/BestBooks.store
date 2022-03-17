import './SortBy.css'
import { BsArrowDownShort } from 'react-icons/bs'

export default function SortBy(){ //SORTBY COMPONENT FOR SORTING BOOKS OR ARTICLES
    return(
        <div className='sortby-container'>
            <p>sort by</p>
            <BsArrowDownShort className='sort-arrow-icon' />
        </div>
    )
}