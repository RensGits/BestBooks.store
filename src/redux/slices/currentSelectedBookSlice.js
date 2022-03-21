import { createSlice } from '@reduxjs/toolkit'

export const searchInputSlice = createSlice({
  name: 'currentSelectedBook',
  initialState: {
    data:{}
  },
  reducers: {
    currentBook: (state, action) => {
      state.currentBook = action.payload
    },
  },
})

export const { updateInput } = searchInputSlice.actions

export default searchInputSlice.reducer
