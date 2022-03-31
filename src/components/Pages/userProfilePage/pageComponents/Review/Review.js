import { useState } from "react"
import StarRatingStatic from "../../../../starRating/StarRatingStatic";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { Link, useNavigate } from "react-router-dom";

export default function Review(props){

    const navigate = useNavigate();

    const [openReview, setOpenReview] = useState();

    const formattedTitle = props.book.title.toLowerCase().split(',').join('').split(' ').join('-')


    const handleExpand = () => {
        setOpenReview(!openReview)
    }

    const state = {
        bookData: props.book,
        bookTitle: formattedTitle
    }

    
    

    return(
        <div>
            <div className="review-wrapper">
                <Link to={`/book-details/${formattedTitle}/`} state={state}>
                    <img className='myreviews-book-image' key={'bookcover' + props.index} src={props.book.book_image} alt="" onClick={() => navigate(`/book-details/${formattedTitle}`)} />
                </Link>
                <div className='myreviews-book-details'>
                    <p className='title'>{props.book.title}</p>
                    <p className='author'>{props.book.author}</p>
                </div>
                <div className='review-container' >
                    <div className='review-header'>
                        <p className='review-user'>{'You rated it:'}</p>
                        <p className='review-date'>{'date: ' + props.review.date}</p>
                    </div>
                    <StarRatingStatic rating={props.review.rating} />
                </div>
                {openReview &&
                    <IoIosArrowUp className='modalexpand-icon' onClick={handleExpand} />
                }
                {!openReview &&
                    <IoIosArrowDown className='modalexpand-icon' onClick={handleExpand}/>
                }
                
            </div>
            {openReview &&
                    <p className='myreviews-review'>{props.review.review}</p>
            }
        </div>
    )
}
