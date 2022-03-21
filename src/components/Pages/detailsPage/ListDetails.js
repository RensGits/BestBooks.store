
import './ListDetails.css'
import { useLocation } from 'react-router-dom'
import ListHeader from '../../list/ListHeader'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import BookData from './pageComponents/bookData/BookData'


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
            <div className='listdetails-container'>
                <ListHeader listName={locationProps.listName}  />
                <div className='listdetails-booksdetails-container'>
                    <img className='listdetails-bookdetails-image' src={currentSelectedBookData.book_image} alt="" />
                    <div className='listdetails-bookdetails-data'>
                        <BookData data={currentSelectedBookData}/>
                    </div>
                </div>
            </div>
        </>
    )
}