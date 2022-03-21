
import './ListDetails.css'
import { useLocation } from 'react-router-dom'
import Header from '../../header/Header'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import BookData from './pageComponents/bookData/BookData'
import SideList from './pageComponents/sideList/SideList.js'


export default function ListDetails(){

    const location = useLocation() // state (props) passed down from Link component
    const listName = location.state.listName
    const currentSelectedBookTitle = location.state.bookTitle
    const currentSelectedBookData = location.state.bookData
    const isList = location.pathname.includes('browse-list')
    
    console.log(location.state)
    
    console.log(currentSelectedBookData)

    
    
    return(
        <>
            <div className='lists-spacer'></div>
            
            <div className='listdetails-wrapper'>
                {isList &&
                    <Header type={'List'} name={listName}  />
                }
                {!isList &&
                    <Header type={'Book'} name={currentSelectedBookTitle} />
                }
                
                
                
                <img className='listdetails-bookdetails-backgroundimage' src={currentSelectedBookData.book_image} alt="" />
                <div className='listdetails-container'>
                        <img className='listdetails-bookdetails-image' src={currentSelectedBookData.book_image} alt="" />
                        <BookData data={currentSelectedBookData}/>
                        {isList &&
                            <SideList currentSelectedBookTitle={currentSelectedBookTitle} listName={listName} />
                        }
                        
                </div>
                <div className='listdetails-review-container'>

                </div>
                
            </div>
        </>
    )
}