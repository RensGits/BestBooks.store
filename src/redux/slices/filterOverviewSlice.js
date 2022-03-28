import { createSlice } from '@reduxjs/toolkit'

export const filterOverviewSlice = createSlice({
  name: 'overviewFilters',
  initialState: {
    author: [],
    publisher: [],
    weeks_on_list: {
      min: undefined,
      max: undefined
    }
  },
  reducers: {
    updateOverviewFilters: (state, action) => {
      if(action.payload.type === 'weeks_on_list'){
        state.weeks_on_list = action.payload.filters
      }
      if(action.payload.type === 'author'){
        state.author = action.payload.filters
      }
      if(action.payload.type === 'publisher'){
        state.publisher = action.payload.filters
      }
      
    },
  },
})

export const { updateOverviewFilters } = filterOverviewSlice.actions

export default filterOverviewSlice.reducer
