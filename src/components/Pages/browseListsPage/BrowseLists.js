import './BrowseLists.css'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllLists } from '../../../redux/slices/allListsSlice'



export default function BrowseLists(){

   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllLists())
    },[])
    
    const loadingState = useSelector((state) => state.allLists.loading)
    const listData = useSelector((state) => state.allLists.data)
    
    return(
        <div className='browselists-page-container'>
            <p>New York Times Lists </p>
            {loadingState === 'loading' &&
                <p>loading...</p>
            }
            {loadingState === 'rejected' &&
                <p>Something went wrong. Please refresh this page and see if the error resolves. If not please contact our service-desk.</p>
            }
            {loadingState === 'completed'  &&
                
                <div className='list-grid-container'>
                    {
                        _.map(listData.results,'list_name').map((item)=>{
                            return(
                                <p className='list-item'>{item}</p>
                            )
                        })
                    }
                </div>   
            }
        </div>
    )
}

