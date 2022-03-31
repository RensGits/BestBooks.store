import './MyReviews.css'
import { useState } from "react"
import { useEffect } from "react"
import { database } from '../../../../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useAuth } from "../../../../../contexts/AuthContext"
import _ from 'lodash'
import { useSelector } from "react-redux"
import Review from '../Review/Review'


export default function MyReviews(){
    
    const collectionRef = collection(database, "reviews")
    const allBooks = useSelector((state) => state.allBooks)
    const { currentUser } = useAuth();
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        if(currentUser.email){
            const getData = async () =>{
                const data = await getDocs(collectionRef)
                const allReviews = data.docs.map(doc => ({
                    ...doc.data(), id: doc.id
                }))
                setReviews(_.filter(allReviews, function(review){
                    console.log(currentUser.email)
                    return review.email === currentUser.email
                }))
                
              }
              getData();
        }
      
        console.log(allBooks)
    }, [currentUser])

    return(
        <div className="profile-container">
            {currentUser &&
                reviews.map((review, index) => {
                    return (
                        <>
                                {allBooks &&
                                    allBooks.data.map((book,index) => {
                                        if(book.title === review.title){
                                           return <Review index={index} book={book} review={review}/>
                                        }
                                    })
                                }
                        </>
                    )
                })
            }
        </div>
    )
}
