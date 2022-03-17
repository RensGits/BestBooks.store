import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../../redux/slices/allBooksSlice';
import Book from './Book.js';
import _ from 'lodash'
import './BooksOverview.css'

export default function BooksOverview(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllBooks())
    },[])

    const loadingStatus = useSelector((state => state.allBooks.loading))
    const data = useSelector((state) => state.allBooks.data.results)

    const[books,setBooks] = useState(null)
    
    useEffect(() => {
        if(data !== undefined){
            console.log(data)
        }
        if(data.lists !== undefined){
            console.log(data.lists)
        }
        if(data.lists[0].books[0].book_image !== undefined){
            const booksLists = _.map(data.lists, 'books');
            const allBooks = []
            booksLists.forEach((bookList) => {
                bookList.forEach((book) => {
                   allBooks.push(book) 
                })
            })
            setBooks(allBooks)
            
          
        }
    },[data])

    useEffect(()=>{
        console.log(loadingStatus)
    },[loadingStatus])

    return(
        <div className='booksoverview-container'>
          {loadingStatus === 'loading' &&
            <p>loading...</p>
          }
          {loadingStatus === 'rejected' &&
             <p>Something went wrong. Please refresh this page and see if the error resolves. If not please contact our service-desk.</p>
          }
          {loadingStatus === 'completed' &&
            <div>
               {books !== null &&
                    books.map((book) => {
                        return <Book data={book} />
                    })
               }
            </div>
          }
        </div>
    )
}