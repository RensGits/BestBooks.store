import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import _ from 'lodash'

export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async () => {
    const { data } = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview/get?api-key=Am2A6IJRbo3Th1MuXSgBVRT1AWWjr21P`)
    return data
  }
)

const allBooksSlice = createSlice({
  name: 'allBooks',
  initialState: { 
      loading: null,
      data: {
      }
   },
  reducers: {
  },
  extraReducers: {
    [fetchAllBooks.pending](state){
        state.loading = 'loading'
    },
    [fetchAllBooks.fulfilled](state, {payload}){
        state.loading = 'completed'

        const booksLists = _.map(payload.results.lists, 'books'); // maps over all lists and creates a colelction with all book lists
            const allBooks = []
            booksLists.forEach((bookList) => {  // merges all lists into a single collection
                bookList.forEach((book) => { 
                   allBooks.push(book) 
                })
            })
            
            function getUniqueListBy(arr, key) { // filters collection for duplicate objects
                return [...new Map(arr.map(item => [item[key], item])).values()]
            }
           
        const filteredData = getUniqueListBy(allBooks, 'title')
        state.data = filteredData
        
    },
    [fetchAllBooks.rejected](state){
        state.loading = 'rejected'
    }
  },
})



export default allBooksSlice.reducer

