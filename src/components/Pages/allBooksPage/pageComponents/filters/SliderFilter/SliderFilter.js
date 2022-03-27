import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateOverviewFilters } from '../../../../../../redux/slices/filterOverviewSlice';
import './SliderFilter.css'

export default function SliderFilter(props){

    const dispatch = useDispatch();

    const sliderMaxRange = Math.max.apply(Math, props.data);
    const sliderMinRange = 0

    const[currentMinValue, setCurrentMinValue] = useState(0)
    const[currentMaxValue, setCurrentMaxValue] = useState(sliderMaxRange)
    
    const getMinWidth = () => { // 
        return (currentMinValue / sliderMaxRange) * 100
    }

    const getMaxWidth = () => {
        return ((currentMaxValue - sliderMaxRange) / (-sliderMaxRange)) * 100
    }

    const handleMinRange = (e) => { // returns current min range in percentage
        if(currentMaxValue - e.target.value < 0.1){
            setCurrentMinValue(currentMaxValue)
        }
        else setCurrentMinValue(e.target.value)
    }

    const handleMaxRange = (e) => { // returns current max range in inverse percentage
        if(e.target.value - currentMinValue < 0.1){
            setCurrentMaxValue(currentMinValue)
        }
        else setCurrentMaxValue(e.target.value)
    }

    const handleFilter = () => {
        if((currentMinValue === sliderMinRange) && (currentMaxValue === sliderMaxRange)){
            dispatch(updateOverviewFilters('clear weekRange'))
        }
        else {
            dispatch(updateOverviewFilters({
                type: 'weekRange',
                filters: {
                    min: parseInt(currentMinValue),
                    max: parseInt(currentMaxValue)
            }}))
        }
    }

    return(
        <>
            <p className='filter-header'>{props.header}</p>
            <div className='sliderfilter-container'>
                <div className='sliderfilter-values-container'>
                    <p className='sliderfilter-value'>{currentMinValue}</p>
                    <p className='sliderfilter-value'>{currentMaxValue}</p>
                </div>
                <input className='input-slider-input left-slider' 
                    type="range" 
                    min={sliderMinRange} 
                    max={sliderMaxRange} 
                    onChange={handleMinRange}
                    value={currentMinValue}
                    onMouseUp={handleFilter}
                >
                </input>
                <input className='input-slider-input right-slider' 
                    type="range" 
                    min={sliderMinRange} 
                    max={sliderMaxRange} 
                    onChange={handleMaxRange}
                    onMouseUp={handleFilter}
                    value={currentMaxValue}
                >
                </input>
                <div className='input-slider-track'></div>
                <div className='input-slider-range' style={{left:`${getMinWidth()}%`, right:`${getMaxWidth()}%`}} ></div>
            </div>
        </>
    )
}