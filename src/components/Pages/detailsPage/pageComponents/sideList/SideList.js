import './SideList.css'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import ListItem from '../../../browseListsPage/pageComponents/ListItem'

export default function SideList(props){
    
    const listBooks = useSelector((state) => state.listBooks.data.results.books)
    const listName = useSelector((state) => state.listBooks.data.results.listName)
    const location = useLocation()
    console.log(location)
    console.log(listName)
   
    
    return(
        <div className='sidelist-container'>
            {listBooks &&
                listBooks.map((book) => {
                    const formatedTitle = book.title.toLowerCase().split(',').join('').split(' ').join('-')
                    if(formatedTitle === props.currentSelectedBookTitle){
                        return(
                            <div className='sidelist-item-container-selected'>
                                <img className='sidelist-item-image-selected' src={book.book_image} alt="" />
                                <p className='sidelist-item-rank-selected'>{book.rank}</p>
                            </div>
                        )
                    }
                    else 
                        return(
                            <div className='sidelist-item-container'>
                                <ListItem data={book} listName={location.state.listName} />
                            </div>
                           
                    )
                    
                })
            }
        </div>
    )
}