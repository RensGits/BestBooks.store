import { createSlice } from '@reduxjs/toolkit'

export const sortBySlice = createSlice({
  name: 'sortBy',
  initialState: {
      type: '',
      order: ''
  },
  reducers: {
    sortBy: (state, action) => {
        state.type = action.payload.split(' ')[0]
        state.order = action.payload.split(' ')[1]
    },
  },
})

export const { sortBy } = sortBySlice.actions

export default sortBySlice.reducer
