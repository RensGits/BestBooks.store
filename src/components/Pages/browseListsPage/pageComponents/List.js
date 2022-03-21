import './List.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import ListItem from '../../../listItem/ListItem';
import { fetchListBooks } from '../../../../redux/slices/listBooksSlice';
import ListHeader from '../../../list/ListHeader';


export default function List(){
    const dispatch = useDispatch();
    const { listName } = useParams()
    useEffect(() => {
        console.log(listName)
        dispatch(fetchListBooks(listName))
    },[])
    
    const loadingState = useSelector((state) => state.allLists.loading)
    const booksData = useSelector((state) => state.listBooks.data)
    
    return(
        <>
        <div className='lists-spacer'></div>
        <div className='list-container'>
            <ListHeader listName={listName} />
            
            <div className='books-container'>
            {loadingState === 'loading' &&
                <p>loading...</p>
            }
            {loadingState === 'rejected' &&
                <p>Something went wrong. Please refresh this page and see if the error resolves. If not please contact our service-desk.</p>
            }
            {loadingState === 'completed' &&
                
                <div className='books-grid-container'>
                    {
                        _.map(booksData.results.books).map((itemData)=>{
                            return(
                                <ListItem data={itemData} listName={listName} />
                            )
                        })
                    }
                </div>   
            }
            </div>
        </div>
        </>
    )
}