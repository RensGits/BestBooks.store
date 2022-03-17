import { createSlice } from '@reduxjs/toolkit'

export const filterOverviewSlice = createSlice({
  name: 'overviewFilters',
  initialState: {
    filters: {}
  },
  reducers: {
    updateOverviewFilters: (state, action) => {
      state.overviewFilters = action.payload
    },
  },
})

export const { updateInput } = filterOverviewSlice.actions

export default filterOverviewSlice.reducer
