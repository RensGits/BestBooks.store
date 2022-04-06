import './PostReview.css'
import '../bookReviews/BookReviews.css'
import { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { setDate, setUser, setReview, setTitle } from '../../../../../redux/slices/postReviewSlice.js';
import StarRatingDynamic from '../../../../starRating/StarRatingDynamic.js'
import { collection, addDoc } from 'firebase/firestore'
import { database } from '../../../../../firebase.js';
import { useSelector } from 'react-redux';
import { getCurrentDate } from '../../../../../functions/getCurrentDate.js';
import { useAuth } from '../../../../../contexts/AuthContext.js';
import { useState } from 'react';
import StarRatingStatic from '../../../../starRating/StarRatingStatic';
import { useNavigate } from 'react-router-dom';



export default function PostReview(props){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const textAreaRef = useRef();
    const { currentUser } = useAuth();
    
    const [confirmModal, setConfirmModal] = useState(false)

    const reviewsCollection = collection(database, "reviews")
    const reviewData = useSelector(state => state.postReview)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setDate(getCurrentDate()))
        dispatch(setUser(currentUser.email))
        dispatch(setReview(textAreaRef.current.value))
        dispatch(setTitle(props.currentSelectedBookTitle))
        setConfirmModal(true);
        console.log('Submitted!')
    }

    const handleConfirm = async () => {
        await addDoc(reviewsCollection, reviewData)
        setConfirmModal(false)
        window.location.reload(false);
    }

    return(
        <div className='postreview-container'>
            <p>Leave a review</p>
            <hr className='header-underline' />
            {currentUser &&
                <>
                    <div className='myrating-container'>
                        <p className='myrating-header'>My rating: </p>
                        <StarRatingDynamic/>
                    </div>
                    <form className='postreview-form' onSubmit={handleSubmit} action="" >
                        <textarea ref={textAreaRef}  />
                        <button type="submit" name="" id="">Post</button>
                    </form>
                    {confirmModal &&
                        <div className='modal-container preview-modal-container'>
                                <p className='preview-header'>Preview</p>
                                <div className='review-container' >
                                    <div className='review-header'>
                                        <p className='review-user'>{reviewData.email + ' rated it:'}</p>
                                        <p className='review-date'>{'date: ' + reviewData.date}</p>
                                    </div>
                                    <StarRatingStatic rating={reviewData.rating} />
                                    <p className='review-review'>{reviewData.review}</p>
                                </div>
                                <button className='modal-button' onClick={handleConfirm}>Confirm</button>
                            </div>
                    }
                </>
            }
            {!currentUser &&
                <p className='please-login' onClick={() => navigate('/login')}>Please log in to leave a review</p>
            }   
        </div>
    )
}
