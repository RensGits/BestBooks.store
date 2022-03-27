import { createSlice } from '@reduxjs/toolkit'


export const filterWeekSlice = createSlice({
  name: 'weekFilter',
  initialState:{},
  reducers: {
    updateWeekFilter: (state, action) => {
        state.weekFilter = action.payload
    },
  },
})

export const { updateWeekFilter } = filterWeekSlice.actions

export default filterWeekSlice.reducer
