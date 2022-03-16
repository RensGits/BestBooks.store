import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


// First, create the thunk
export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async () => {
    const { data } = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview/get?api-key=Am2A6IJRbo3Th1MuXSgBVRT1AWWjr21P`)
    return data
  }
)

// Then, handle actions in your reducers:
const allBooksSlice = createSlice({
  name: 'allBooks',
  initialState: { 
      loading: null,
      data: {
          books: ''
      }
   },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    [fetchAllBooks.pending](state){
        state.loading = 'loading'
    },
    [fetchAllBooks.fulfilled](state, {payload}){
        state.loading = 'completed'
        state.data = payload
        
    },
    [fetchAllBooks.rejected](state){
        state.loading = 'rejected'
    }
  },
})

export default allBooksSlice.reducer

