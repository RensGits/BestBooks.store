import './Filters.css'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import CheckBoxFilter from '../checkboxFilters/CheckboxFilters'


export default function Filter(){ // FILTER COMPONENT FOR BOOKSOVERVIEW COMPONENT

    const allBooks = useSelector((state) => state.allBooks.data) // retrieves all books collection from store
    const allAuthors = _.uniq(_.map(allBooks, 'author')).sort() // return array of unique authors
    const allPublishers = _.uniq(_.map(allBooks, 'publisher')).sort() // return array of unique publishers

  
    return(
        <div className='filters-container'>
            <CheckBoxFilter header="Authors" filterType='author' data={allAuthors} />
            <CheckBoxFilter header="Publishers" filterType='publisher' data={allPublishers} />
            <p className='filter-header'>Publish date</p>
            <div>
                {allBooks &&
                    <div className='publishdate-container'>

                    </div>
                }
            </div>
        </div>
    )
}