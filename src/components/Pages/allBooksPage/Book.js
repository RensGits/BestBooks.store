import './Book.css'

export default function Book(props){ // BOOK COMPONENT FOR SHOWING INDIVIDUAL BOOKS IN BOOKSOVERVIEW COMPONENT
    
    return(
        <div className='book-container'>
            <img className='book-image' src={props.data.book_image} alt='' />
        </div>
    )
}
