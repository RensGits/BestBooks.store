import { useEffect, useState } from 'react'
import './CheckboxFilters.css'
import { useDispatch } from 'react-redux'
import { updateOverviewFilters } from '../../../../../../redux/slices/filterOverviewSlice'

export default function CheckBoxFilter(props){

    const [checkedFilters,setCheckedFilter] = useState([])
    const handleChange = (e) => {
        if(!checkedFilters.includes(e.target.value)){ // if checked filter is not included in checkFilters state array
            setCheckedFilter([...checkedFilters, e.target.value]) // add filter to state array
        }
        else {  // else remove from checkedFilter state array
            setCheckedFilter(checkedFilters.filter(item => item !== e.target.value))
        }
    }

    
    const dispatch = useDispatch();
    useEffect(() => {
       
          // dispatches filter with filtertype to filterOverview slice
            dispatch(updateOverviewFilters(
                { 
                    type: props.filterType,
                    filters: checkedFilters
                }
            ))
    },[checkedFilters])

    return(
        <>  
            <p className='filter-header'>{props.header}</p>
            <div className='checkboxes-container'>
                {   props.data.map((item,index) => {  // return item checkbox for each item
                        return( 
                                <div className='checkbox-label-container' key={'checkBox' + index}>
                                    <label className='checkbox-label' htmlFor={item}>{item.split('and',)[0].split('with')[0].split(',')[0]}</label>
                                    <input className='checkbox-input' type="checkbox" id={item} value={item} onChange={handleChange} />
                                </div>
                        )
                    })
                }
            </div>
        </>
    )
}