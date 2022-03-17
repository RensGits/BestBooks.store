import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAllLists = createAsyncThunk(
  'books/fetchAllLists',
  async () => {
    const { data } = await axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=Am2A6IJRbo3Th1MuXSgBVRT1AWWjr21P')
    console.log(data)
    return data
  }
)

const allListsSlice = createSlice({
  name: 'allLists',
  initialState: { 
      loading: null,
      data: {
        results: {
        }
      } 
   },
  reducers: {

  },
  extraReducers: {
    [fetchAllLists.pending](state){
        state.loading = 'loading'
    },
    [fetchAllLists.fulfilled](state, {payload}){
        state.loading = 'completed'
        

        state.data = payload

    },
    [fetchAllLists.rejected](state){
        state.loading = 'rejected'
    }
  },
})

export default allListsSlice.reducer
