import './Filters.css';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import CheckBoxFilter from '../filters/checkboxFilters/CheckboxFilters.js';
import SliderFilter from '../filters/SliderFilter/SliderFilter.js';


export default function Filter(){ // FILTER COMPONENT FOR BOOKSOVERVIEW COMPONENT

    const allBooks = useSelector((state) => state.allBooks.data) // retrieves all books collection from store
    const allAuthors = _.uniq(_.map(allBooks, 'author')).sort() // returns array of unique authors
    const allPublishers = _.uniq(_.map(allBooks, 'publisher')).sort() // returns array of unique publishers
    const allWeeksOnList = _.uniq(_.map(allBooks, 'weeks_on_list')).sort()
    const allRanks = _.uniq(_.map(allBooks, 'rank')).sort() // returns array of unique weeks on list numbers
  
    return(
        <div className='filters-container'>
            <CheckBoxFilter header="Authors" filterType='author' data={allAuthors} />
            <CheckBoxFilter header="Publishers" filterType='publisher' data={allPublishers} />
            <SliderFilter header="Weeks on list" filterType='weeks_on_list' data={allWeeksOnList} />
            <SliderFilter header="List rank" filterType='rank' data={allRanks} />
            
        </div>
    )
}