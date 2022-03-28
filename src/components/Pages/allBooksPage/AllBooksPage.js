import './AllBooksPage.css'
import SortBy from '../../sortBy/SortBy.js'
import Filters from './pageComponents/filters/Filters.js'
import BooksOverview from './pageComponents/booksOverview/BooksOverview.js'
import { Outlet } from 'react-router-dom'

export default function AllBooks(){ // ALLBOOKS PAGE

    return(
        <div className='allbooks-page-container'>
            <Outlet/>
            <SortBy />
            <div className='allbooks-content-container'>
                <Filters />
                <div className='allbooks-line-divider'></div>
                <BooksOverview />
            </div>
        </div>
    )
}