import './BooksOverview.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../../../../redux/slices/allBooksSlice';
import Book from '../book/Book';
import _ from 'lodash'



export default function BooksOverview(){    // COMPONENT SHOWING ALL BOOKS ON ALL BOOKS TAB

    const loadingStatus = useSelector((state => state.allBooks.loading)) // fetch status from allBooksSlice
    const data = useSelector((state) => state.allBooks.data)

    const dispatch = useDispatch();

    useEffect(() => {  // fetches data from allBooksSlice
        if(loadingStatus !== 'completed')
        dispatch(fetchAllBooks())
    },[])

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
               {data !== null &&   // maps over all books and returns a Book component for each
                    data.map((book,index) => {
                        return <Book data={book} key={index} />
                    })
               }
            </div>
          }
        </div>
    )
}