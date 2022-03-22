import { Link } from 'react-router-dom'
import './SearchResult.css'

export default function SearchResult(props){

    const formattedTitle= props.data.title.toLowerCase().split(',').join('').split(' ').join('-')

    const state = {
        bookData: props.data,
        bookTitle: formattedTitle
    }

    const capitalizedTitle = props.data.title.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ')

    return(
            <Link to={`book-details/${formattedTitle}`} state={state} className='searchresult-container'>
                <img className='searchresult-bookcover' src={props.data.book_image} alt="" />
                <div className='searchresult-info-container'>
                    <p className='searchresult-booktitle' style={{textDecoration:'none'}}>{capitalizedTitle}</p>
                    <p className='searchresult-bookauthor'>{'by ' + props.data.author}</p>
                </div>
            </Link>
    )
}