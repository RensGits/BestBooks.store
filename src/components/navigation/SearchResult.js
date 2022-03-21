import { Link } from 'react-router-dom'
import './SearchResult.css'

export default function SearchResult(props){

    const formattedTitle= props.data.title.toLowerCase().split(',').join('').split(' ').join('-')

    const state = {
        bookData: props.data,
        bookTitle: formattedTitle
    }


    return(
        
        
            <Link to={`book-details/${formattedTitle}`} state={state} className='searchresult-container'>
                <img className='searchresult-bookcover' src={props.data.book_image} alt="" />
                <p className='searchresult-booktitle' style={{textDecoration:'none'}}>{props.data.title}</p>
                <p className='searchresult-divider'>-</p>
                <p className='searchresult-bookauthor'>{props.data.author}</p>
            </Link>
       
        
    )
}