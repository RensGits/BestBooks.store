import './BooksOverview.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../../../../redux/slices/allBooksSlice';
import Book from '../book/Book';
import _ from 'lodash'



export default function BooksOverview(){    // COMPONENT SHOWING ALL BOOKS ON ALL BOOKS TAB

    const loadingStatus = useSelector((state => state.allBooks.loading)) // fetch status from allBooksSlice
    const data = useSelector((state) => state.allBooks.data)
    const filters = useSelector((state) => state.overviewFilters)
    const [filteredData,setFilteredData] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {  // fetches data from allBooksSlice
        if(loadingStatus !== 'completed')
        dispatch(fetchAllBooks())
    },[])

    useEffect(() => {

      const tempArray = []
      if(filters.authors.length > 0 || filters.publishers.length > 0){
        _.forEach(data, function(value,key){
          if(filters.authors.includes(value.author)){
            tempArray.push(value)
          }
          if(filters.publishers.includes(value.publisher)){
            tempArray.push(value)
          }
        })
      }
      setFilteredData(tempArray)
    },[filters])

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
               {(data !== null && filteredData.length === 0) &&   // maps over all books and returns a Book component for each
                    data.map((book,index) => {
                        return <Book data={book} key={index} />
                    })
               }
               {filteredData.length > 0 &&   // maps over all filtered books and returns a Book component for each
                    filteredData.map((book,index) => {
                        return <Book data={book} key={index} />
                    })
               }
            </div>
          }
        </div>
    )
}