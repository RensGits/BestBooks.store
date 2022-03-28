import './SideList.css'
import { useSelector } from 'react-redux'
import {  useLocation } from 'react-router-dom'
import ListItem from '../../../../listItem/ListItem.js'

export default function SideList(props){
    
    const listBooks = useSelector((state) => state.listBooks.data.results.books)
    const location = useLocation()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    return(
        <div className='sidelist-container'>
            {listBooks &&
                listBooks.map((book, index) => {
                    const formatedTitle = book.title.toLowerCase().split(',').join('').split(' ').join('-')
                    if(formatedTitle === props.currentSelectedBookTitle){
                        return(
                            <div className='sidelist-item-container-selected' onClick={scrollToTop} >
                               <ListItem data={book} listName={location.state.listName} selected={true} key={'listItem' + index} />
                            </div>
                        )
                    }
                    else 
                        return(
                            <div className='sidelist-item-container' onClick={scrollToTop} >
                                <ListItem data={book} listName={location.state.listName} selected={false} key={'listItem' + index} />
                            </div>   
                        )
                })
            }
        </div>
    )
}