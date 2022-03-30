import './StarRating.css'
import { AiFillStar } from 'react-icons/ai'

export default function StarRatingStatic(props){
    const numberOfRedStars = parseInt(props.rating)
    const numberOfGreyStars = 5 - parseInt(props.rating)

    console.log(numberOfGreyStars)
    console.log(numberOfRedStars)



    return(
        <div className='starrating-container-static'>
            {props.rating &&
                Array(numberOfRedStars).fill(0).map((_, i) => <AiFillStar className='starrating-star' color='red' />)
            }
            {props.rating &&
                Array(numberOfGreyStars).fill(0).map((_, i) => <AiFillStar className='starrating-star' color='#C4C4C4' />)
            }
        </div>
    )
}