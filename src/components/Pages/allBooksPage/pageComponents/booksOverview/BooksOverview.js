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

    // useEffect(() => {
      
    //   if(filters.authors || filters.publisher){
    //     if(filters.publisher.length === 0 && filters.author.length > 0){ // if there are currently no publisher filters selected
    //       setFilteredData(_.filter(data, (item) => { // filter original data for selected authors
    //         return filters.author.includes(item.author)
    //       }))
    //     }
    //     if(filters.author.length === 0 && filters.publisher.length > 0){  // if there are currebtly no author filters selected
    //       setFilteredData(_.filter(data, (item) => { // filter original data for selected publishers
    //         return filters.publisher.includes(item.publisher)
    //       }))
    //     }
    //     if(filters.author.length > 0 && filters.publisher.length > 0){ // if both author & publisher filters are selected
    //       setFilteredData(_.filter(data, (item) => {  // filter original data for selected authors and publishers
    //         return filters.publisher.includes(item.publisher) && filters.author.includes(item.author)
    //       }))
    //     }
    //   }
    // },[filters])

    function checkboxFilter(category){
      if(filters[category].length > 0){
        return _.filter(data, function(book){
          if(filters[category].length > 0){
            return filters[category].includes(book[category])
          }
      })
      }
      else return data
    }

    useEffect(() => {
      const filteredByAuthor = checkboxFilter('author')
      const filteredByPublisher = checkboxFilter('publisher')
      const allFiltersApplied = _.intersectionWith(filteredByAuthor, filteredByPublisher, _.isEqual);
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
