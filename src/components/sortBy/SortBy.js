import './SortBy.css'
import { BsArrowDownShort } from 'react-icons/bs'

export default function SortBy(){
    return(
        <div className='sortby-container'>
            <p>sort by</p>
            <BsArrowDownShort className='sort-arrow-icon' />
        </div>
    )
}