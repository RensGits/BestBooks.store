import { createSlice } from '@reduxjs/toolkit'

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState: {
    searchInput: '',
  },
  reducers: {
   
    updateInput: (state, action) => {
      state.searchInput = action.payload
    },
  },
})

export const { updateInput } = searchInputSlice.actions

export default searchInputSlice.reducer