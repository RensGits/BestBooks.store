import './SideList.css'
import { useSelector } from 'react-redux'

export default function SideList(props){

    const listBooks = useSelector((state) => state.listBooks.data.results.books)

    console.log(props.currentSelectedBookTitle)
    


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
                                <img className='sidelist-item-image' src={book.book_image} alt="" />
                                <p className='sidelist-item-rank'>{book.rank}</p>
                            </div>
                    )
                    
                })
            }
        </div>
    )
}