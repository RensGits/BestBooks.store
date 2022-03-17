import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../../redux/slices/allBooksSlice';
import Book from './Book.js';
import _ from 'lodash'
import './BooksOverview.css'

export default function BooksOverview(){    // COMPONENT SHOWING ALL BOOKS ON ALL BOOKS TAB

    const dispatch = useDispatch();

    useEffect(() => {  // fetches data from allBooksSlice
        dispatch(fetchAllBooks())
    },[])

    const loadingStatus = useSelector((state => state.allBooks.loading)) // fetch status from allBooksSlice
    const data = useSelector((state) => state.allBooks.data.results) // fetched data from allBooksSlice

    const[books,setBooks] = useState(null)
    
    useEffect(() => {   // creates single array of all books found in all books lists
        if(data.lists[0].books[0].book_image !== undefined){
            const booksLists = _.map(data.lists, 'books');
            const allBooks = []
            booksLists.forEach((bookList) => {
                bookList.forEach((book) => { // TODO: remove duplicates
                   allBooks.push(book) 
                })
            })
            setBooks(allBooks)
        }
    },[data])

    return(
        <div className='booksoverview-container'>
          {loadingStatus === 'loading' &&   // loading indicator
            <p>loading...</p>
          }
          {loadingStatus === 'rejected' &&  // error indicator
             <p>Something went wrong. Please refresh this page and see if the error resolves. If not please contact our service-desk.</p>
          }
          {loadingStatus === 'completed' &&
            <div className='booksoverview-grid'>
               {books !== null &&   // maps over all books and returns a Book component for each
                    books.map((book) => {
                        return <Book data={book} />
                    })
               }
            </div>
          }
        </div>
    )
}