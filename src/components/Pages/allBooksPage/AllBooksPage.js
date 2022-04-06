import './AllBooksPage.css'
import SortBy from '../../sortBy/SortBy.js'
import Filters from './pageComponents/filters/Filters.js'
import BooksOverview from './pageComponents/booksOverview/BooksOverview.js'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { FiFilter} from 'react-icons/fi'

export default function AllBooks(){ // ALLBOOKS PAGE

    const [openFilters, setOpenFilters] = useState('open')
    const handleExpand = () => {
        if(openFilters === 'open'){
            setOpenFilters('close')
        }
        else setOpenFilters('open')
    }

    

    return(
        <div className='page-container'>
            <Outlet/>
            <div className='page-container-header'>
                <div className='header-alignment-container-filters' onClick={handleExpand}>
                    <FiFilter className='filter-icon' />
                    <p>filters</p>
                    {openFilters === 'close' &&
                        <IoIosArrowUp className='filtersexpand-icon'/>
                    }
                    {openFilters === 'open' &&
                        <IoIosArrowDown className='filtersexpand-icon' />
                    }
                </div>
                <SortBy />
            </div>
            <div className='content-container'>
                <Filters dynamicStyle={openFilters}/>
                <div className='line-divider'></div>
                <BooksOverview />
            </div>
        </div>
    )
}
