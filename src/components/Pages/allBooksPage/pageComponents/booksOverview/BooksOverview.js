import './BooksOverview.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../../../../redux/slices/allBooksSlice';
import { Oval } from 'react-loader-spinner';
import Book from '../book/Book';
import _ from 'lodash'
import ResultsIndicator from '../resultsIndicator/ResultsIndicator.js';


export default function BooksOverview(){    // COMPONENT SHOWING ALL BOOKS ON ALL BOOKS TAB

    const loadingStatus = useSelector((state => state.allBooks.loading)) // fetch status from allBooksSlice
    const sorting = useSelector((state) => state.sortBy)
    const filters = useSelector((state) => state.overviewFilters)
    const [data,setData] = useState(useSelector((state) => _.orderBy(state.allBooks.data,['rank'],['asc'])))
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

    useEffect(() => { // filters books when a filter is changed
      const filteredByAuthor = checkboxFilter('author')
      const filteredByPublisher = checkboxFilter('publisher')
      const filteredByWeekRange = rangeFilter('weeks_on_list')
      const filteredByRank = rangeFilter('rank')
      const allFiltersApplied = _.intersectionWith(filteredByRank, filteredByAuthor, filteredByPublisher, filteredByWeekRange, ); // returns books that are found in all filters
      setFilteredData(allFiltersApplied)
    },[filters])

    useEffect(() => {
      if(filteredData.length === 0){
        setData(
          _.orderBy(data, [sorting.type], [sorting.order])
        )
      }
      else setFilteredData(
          _.orderBy(filteredData, [sorting.type], [sorting.order])
        )
    },[sorting])

    function DisplayedData(){ // returns original fetched data if no filters are applied, else returns filtered data
      if(
        (filters.author.length > 0) || 
        (filters.publisher.length > 0) || 
        (filters.weeks_on_list.min !== undefined) || 
        (filters.rank.min !== undefined) ||
        (sorting.type)
        ){
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
          <div className='spinner-loader'>
              <Oval
              ariaLabel="loading-indicator"
              height={100}
              width={100}
              strokeWidth={5}
              color="#EE7272"
              secondaryColor="#e9e6e6"
              />
          </div>
           
          }
          {loadingStatus === 'rejected' &&  
             <p className='fetch-status-indicator'>Something went wrong. Please refresh this page and see if the error resolves. If not please come back at a later time.</p>
          }
          {loadingStatus === 'completed' &&
            <div className='booksoverview-grid'>
              {filters && 
                <>
                 <DisplayedData/>
                 <ResultsIndicator numberOfResults = {filteredData.length}/>
                </>
              }
            </div>
          }
        </div>
    )
}
