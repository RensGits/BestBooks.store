import './BookReviews.css'
import { database } from '../../../../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import _ from 'lodash'
import StarRatingStatic from '../../../../starRating/StarRatingStatic'


export default function BookReviews(props){
    const collectionRef = collection(database, "reviews")
    const [reviews, setReviews] = useState([])

    useEffect(() => {
      const getData = async () =>{
        const data = await getDocs(collectionRef)
        const allReviews = data.docs.map(doc => ({
            ...doc.data(), id: doc.id
        }))
        setReviews(_.filter(allReviews, function(review){
            return review.title === props.currentSelectedBookTitle
        }))
        
      }
      getData();
      
    }, [])

    useEffect(() => {
        console.log(reviews)
    },[reviews])

    return(
        <div className='reviews-container'>
            <p className='reviews-header'>Community reviews</p>
            <hr className='header-underline' />
            {reviews &&
                reviews.map((review, index) => {
                    return(
                        <div className='review-container' key={'review' + index}>
                            <div className='review-header'>
                                <p className='review-user'>{review.email + ' rated it:'}</p>
                                <p className='review-date'>{'date: ' + review.date}</p>
                            </div>
                            <StarRatingStatic rating={review.rating} />
                            <p className='review-review'>{review.review}</p>
                        </div>
                    )
                })
            }
            {reviews.length === 0 &&
                <p>This book has no reviews yet.</p>
            }
        </div>
        
    )
}