import './BrowseListsPage.css'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllLists } from '../../../redux/slices/allListsSlice'
import Underline from '../../underline/Underline';
import { Link } from 'react-router-dom';



export default function BrowseLists(){ // BROWSE LISTS COMPONENT FOR BROWSELISTS TAB

    const loadingState = useSelector((state) => state.allLists.loading)
    const listData = useSelector((state) => state.allLists.data)

    const dispatch = useDispatch();
    useEffect(() => {
        if(loadingState !== 'completed'){
            dispatch(fetchAllLists())
        }
        
    },[])
    
   
    
    return(
        <div className='browselists-page-container'>
            <div className='lists-spacer'></div>
            <div className='underline-container'>
                <p>New York Times Lists </p>
                <Underline cName="underline" />
            </div>
            
            {loadingState === 'loading' &&
                <p className='loading-indicator'>loading...</p>
            }
            {loadingState === 'rejected' &&
                <p>Something went wrong. Please refresh this page and see if the error resolves. If not please contact our service-desk.</p>
            }
            {loadingState === 'completed'  &&
                
                <div className='list-grid-container'>
                    {
                        _.map(listData.results,'list_name').map((item)=>{
                            const list = item.split(' ').join('-').toLowerCase();
                            return(
                                <Link to={`/browse-lists/${list}`}><p className='list-item'>{item}</p></Link>
                            )
                        })
                    }
                </div>   
            }
        </div>
    )
}

