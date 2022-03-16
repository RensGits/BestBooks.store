import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../../redux/slices/allBooksSlice';
import _ from 'lodash'
import './BooksOverview.css'

export default function BooksOverview(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllBooks())
    },[])

    const data = useSelector((state) => state.allBooks.data.results)

    useEffect(()=>{

    },[data])
  

    return(
        <div className='booksoverview-container'>
          <p>test</p>
        </div>
    )
}