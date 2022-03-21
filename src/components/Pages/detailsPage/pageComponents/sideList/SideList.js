import './SideList.css'
import { useSelector } from 'react-redux'
import {  useLocation } from 'react-router-dom'
import ListItem from '../../../../listItem/ListItem.js'

export default function SideList(props){
    
    const listBooks = useSelector((state) => state.listBooks.data.results.books)
    const location = useLocation()

    return(
        <div className='sidelist-container'>
            {listBooks &&
                listBooks.map((book) => {
                    const formatedTitle = book.title.toLowerCase().split(',').join('').split(' ').join('-')
                    if(formatedTitle === props.currentSelectedBookTitle){
                        return(
                            <div className='sidelist-item-container-selected'>
                               <ListItem data={book} listName={location.state.listName} selected={true} />
                            </div>
                        )
                    }
                    else 
                        return(
                            <div className='sidelist-item-container' >
                                <ListItem data={book} listName={location.state.listName} selected={false} />
                            </div>   
                        )
                })
            }
        </div>
    )
}