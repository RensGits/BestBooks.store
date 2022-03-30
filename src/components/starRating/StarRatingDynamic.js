import './StarRating.css'
import { AiFillStar } from 'react-icons/ai'
import { useState } from 'react'
import { setRating } from '../../redux/slices/postReviewSlice'
import { useDispatch } from 'react-redux'

export default function StarRatingDynamic(){
    const dispatch = useDispatch();
    const [star1Color, setStar1Color] = useState('#C4C4C4')
    const [star2Color, setStar2Color] = useState('#C4C4C4')
    const [star3Color, setStar3Color] = useState('#C4C4C4')
    const [star4Color, setStar4Color] = useState('#C4C4C4')
    const [star5Color, setStar5Color] = useState('#C4C4C4')

    const [ratingSelected, setRatingSelected] = useState(false)
    
    const setStarsColors = [setStar1Color, setStar2Color, setStar3Color, setStar4Color, setStar5Color]

    const starSetter = (e) => {
        setStarsColors.map((starSetter, index) => {
            if(index <= e.target.id){
                starSetter('red')
            }
        })
        }

    const handleMouseEnter = (e) => {
        setRatingSelected(false)
        starSetter(e);
    } 

    const handleMouseLeave = (e) => {
        if(!ratingSelected){
            setStarsColors.map(starSetter => {
                return starSetter('#C4C4C4')
            })
        }
    }

    const handleClick = (e) => {
        dispatch(setRating(parseInt(e.currentTarget.id) + 1))
        setRatingSelected(true)
        starSetter(e)
    }

    return(
        <div className='starrating-container-dynamic' style={{height: '3em'}}>
                <AiFillStar className='starrating-star' color={star1Color} id={0} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} />
                <AiFillStar className='starrating-star' color={star2Color} id={1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}/>
                <AiFillStar className='starrating-star' color={star3Color} id={2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}/>
                <AiFillStar className='starrating-star' color={star4Color} id={3} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}/>
                <AiFillStar className='starrating-star' color={star5Color} id={4} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}/>
        </div>
    )
}
      