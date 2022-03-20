import './ListItem.css'
import { Link } from 'react-router-dom'

export default function ListItem(props){
    
    const bookTitle = props.data.title.split(' ').join('-').split(',').join('').toLowerCase();
    const state = {
        listName: props.listName,
        bookTitle: bookTitle
    }

    return(
        <Link to={`/browse-lists/${props.listName}/details/${bookTitle}`} state={state}  >
            <div className='list-item-container'>
                <p className='list-item-rank'>{props.data.rank}</p>
                <img className='list-item-image' src={props.data.book_image} alt=""/>
            </div>
        </Link>
        
    )
}