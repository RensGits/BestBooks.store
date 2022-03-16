import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


// First, create the thunk
export const fetchListBooks = createAsyncThunk(
  'books/fetchListBooks',
  async (payload) => {
    console.log(payload)
    const { data } = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${payload}.json?api-key=Am2A6IJRbo3Th1MuXSgBVRT1AWWjr21P`)
    return data
  }
)

// Then, handle actions in your reducers:
const listBooksSlice = createSlice({
  name: 'listBooks',
  initialState: { 
      loading: null,
      data: {
          results:{
            books: ''
          }
          
      }
   },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    [fetchListBooks.pending](state){
        state.loading = 'loading'
    },
    [fetchListBooks.fulfilled](state, {payload}){
        state.loading = 'completed'
        state.data = payload
        
    },
    [fetchListBooks.rejected](state){
        state.loading = 'rejected'
    }
  },
})

export default listBooksSlice.reducer

