import './AllBooks.css'
import SortBy from '../../sortBy/SortBy'
import Filters from './Filters'
import BooksOverview from './BooksOverview'

export default function AllBooks(){ // ALLBOOKS PAGE

    return(
        <div className='allbooks-page-container'>
            <SortBy />
            <div className='allbooks-content-container'>
                <Filters />
                <BooksOverview />
            </div>
        </div>
    )
}