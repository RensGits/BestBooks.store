
import './ListDetails.css'
import { useLocation } from 'react-router-dom'
import Header from '../../header/Header'
import BookData from './pageComponents/bookData/BookData'
import SideList from './pageComponents/sideList/SideList.js'
import BookReviews from './pageComponents/bookReviews/BookReviews.js'
import PostReview from './pageComponents/postReview/PostReview'


export default function ListDetails(){

    const location = useLocation() // state (props) passed down from Link component
    const listName = location.state.listName
    const currentSelectedBookTitle = location.state.bookTitle
    const currentSelectedBookData = location.state.bookData
    const isList = location.pathname.includes('browse-list')

    return(
        <>
            <div className='lists-spacer'></div>
            
            <div className='listdetails-wrapper'>
                {isList &&
                    <Header type={'List'} name={listName} backArrowTo={`/browse-lists/${listName}`}  />
                }
                {!isList &&
                    <Header type={'Book'} name={currentSelectedBookTitle} backArrowTo='/' />
                }
                
                
                
                <img className='listdetails-bookdetails-backgroundimage' src={currentSelectedBookData.book_image} alt="" />
                <div className='listdetails-container'>
                    <div>
                        <div className='listdetails-data-container'>
                            <img className='listdetails-bookdetails-image' src={currentSelectedBookData.book_image} alt="" />
                            <BookData data={currentSelectedBookData}/>
                        </div>
                        <BookReviews currentSelectedBookTitle={currentSelectedBookData.title} />
                        <PostReview currentSelectedBookTitle={currentSelectedBookData.title} />
                    </div>
                    {isList &&
                        <SideList currentSelectedBookTitle={currentSelectedBookTitle} listName={listName} />
                    } 
                </div>
            </div>
        </>
    )
}