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
        dispatch(fetchAllBooks())
    },[])

    function checkboxFilter(category){  // filters book by filter category of type checkbox
      if(filters[category].length > 0){
        return _.filter(data, function(book){
            return filters[category].includes(book[category])
        })
      }
      else return data
    }

    function rangeFilter(category){  // filters book by filter categroy of type range
      if(filters[category].min !== undefined){
        return _.filter(data, function(book){
          return book[category] >= filters[category].min && book[category] <= filters[category].max 
        })
      }
      else return data
    }

    useEffect(() => {
      const filteredByAuthor = checkboxFilter('author')
      const filteredByPublisher = checkboxFilter('publisher')
      const filteredByWeekRange = rangeFilter('weeks_on_list')
      const allFiltersApplied = _.intersectionWith(filteredByAuthor, filteredByPublisher, filteredByWeekRange, _.isEqual); // returns books that are found in all filters
      setFilteredData(allFiltersApplied)
    },[filters])

    function DisplayedData(){ // returns original fetched data if no filters are applied, else returns filtered data
      if((filters.author.length > 0) || (filters.publisher.length > 0)){
        return filteredData.map((book,index) => {
          return <Book data={book} key={index} />
      })
      }
      else{
        return data.map((book,index) => {
          return <Book data={book} key={index} />
      })
      }
    }

    return(
        <div className='booksoverview-container'>
          {loadingStatus === 'loading' &&   
            <p>loading...</p>
          }
          {loadingStatus === 'rejected' &&  
             <p>Something went wrong. Please refresh this page and see if the error resolves. If not please contact our service-desk.</p>
          }
          {loadingStatus === 'completed' &&
            <div className='booksoverview-grid'>
              {filters && 
                 <DisplayedData/>
              }
            </div>
          }
        </div>
    )
}
