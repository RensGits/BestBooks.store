import { useEffect, useState } from 'react'
import './CheckboxFilters.css'
import { updateOverviewFilters } from '../../../../../redux/slices/filterOverviewSlice'
import { useDispatch } from 'react-redux'

export default function CheckBoxFilter(props){

    const [checkedFilters,setCheckedFilter] = useState([])
    const handleChange = (e) => {
        if(!checkedFilters.includes(e.target.value)){
            setCheckedFilter([...checkedFilters, e.target.value])
        }
        else {
            setCheckedFilter(checkedFilters.filter(item => item !== e.target.value))
        }
    }
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEffect triggered')
        
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
                                    <label className='checkbox-label' htmlFor={item}>{item}</label>
                                    <input className='checkbox-input' type="checkbox" id={item} value={item} onChange={handleChange} />
                                </div>
                        )
                    })
                }
            </div>
        </>
    )
}