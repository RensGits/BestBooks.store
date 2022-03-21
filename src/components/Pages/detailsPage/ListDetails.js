
import './ListDetails.css'
import { useLocation } from 'react-router-dom'
import ListHeader from '../../list/ListHeader'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import BookData from './pageComponents/bookData/BookData'
import SideList from './pageComponents/sideList/SideList.js'


export default function ListDetails(){

    const location = useLocation() // state (props) passed down from Link component
    const locationProps = location.state
    const currentSelectedBookTitle = location.state.bookTitle
    const listBooks = useSelector((state) => state.listBooks.data.results.books)
    const currentSelectedBookData = _.find(listBooks, function(book){
        const formatedTitle = book.title.toLowerCase().split(',').join('').split(' ').join('-')
        return formatedTitle === currentSelectedBookTitle
    })
    
    return(
        <>
            <div className='lists-spacer'></div>
            
            <div className='listdetails-wrapper'>
                <ListHeader listName={locationProps.listName}  />
                <img className='listdetails-bookdetails-backgroundimage' src={currentSelectedBookData.book_image} alt="" />
                <div className='listdetails-container'>
                        <img className='listdetails-bookdetails-image' src={currentSelectedBookData.book_image} alt="" />
                        <BookData data={currentSelectedBookData}/>
                        <SideList currentSelectedBookTitle={currentSelectedBookTitle} />
                </div>
                <div className='listdetails-review-container'>

                </div>
                
            </div>
        </>
    )
}