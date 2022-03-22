import { createSlice } from '@reduxjs/toolkit'


export const filterOverviewSlice = createSlice({
  name: 'overviewFilters',
  initialState:{
    authors: [],
    publishers: []
  },
  reducers: {
    updateOverviewFilters: (state, action) => {
      if(action.payload.type === 'author'){
        state.authors = action.payload.filters
      }
      if(action.payload.type === 'publisher'){
        state.publishers = action.payload.filters
      }
      
    },
  },
})

export const { updateOverviewFilters } = filterOverviewSlice.actions

export default filterOverviewSlice.reducer
