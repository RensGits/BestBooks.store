import { Link } from 'react-router-dom'
import './Book.css'

export default function Book(props){ // BOOK COMPONENT FOR SHOWING INDIVIDUAL BOOKS IN BOOKSOVERVIEW COMPONENT

    const formattedTitle = props.data.title.toLowerCase().split(',').join('').split(' ').join('-')

    const state = {
        bookData: props.data,
        bookTitle: formattedTitle
    }

    return(
        <div className='book-wrapper'>
            <Link to={`/book-details/${formattedTitle}/`} state={state} >
                <div className='book-container'>
                <img className='book-image' src={props.data.book_image} alt='' />
                </div>
            </Link>
        </div>
    )
}
