import { useState } from "react"
import StarRatingStatic from "../../../../starRating/StarRatingStatic";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

export default function Review(props){

    const [openReview, setOpenReview] = useState();

    const handleExpand = () => {
        setOpenReview(!openReview)
    }

    return(
        <div>
            <div className="review-wrapper">
                <img className='myreviews-book-image' key={'bookcover' + props.index} src={props.book.book_image} alt="" />
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
