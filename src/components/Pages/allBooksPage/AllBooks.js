import './AllBooks.css'
import SortBy from '../../sortBy/SortBy'
import Filters from './Filters'
import BooksOverview from './BooksOverview'
import Pagination from './Pagination'


export default function AllBooks(){
    return(
        <div className='allbooks-page-container'>
            <SortBy />
            <div className='allbooks-content-container'>
                <Filters />
                <BooksOverview />
            </div>
            <Pagination />
        </div>
    )
}