import { createSlice } from '@reduxjs/toolkit'


export const filterOverviewSlice = createSlice({
  name: 'overviewFilters',
  initialState: {
    author: [],
    publisher: [],
  },
  reducers: {
    updateOverviewFilters: (state, action) => {
      if(action.payload === 'clear author'){
        state.author = []
      }
      if(action.payload === 'clear publisher'){
        state.publisher = []
      }
      if(action.payload === 'clear weekRange'){
        state.weekRange = []
      }
      if(action.payload.type === 'weekRange'){
        state.weekRange = action.payload.filters
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
