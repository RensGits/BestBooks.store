import './AllBooksPage.css'
import SortBy from '../../sortBy/SortBy.js'
import Filters from './pageComponents/filters/Filters.js'
import BooksOverview from './pageComponents/booksOverview/BooksOverview.js'

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