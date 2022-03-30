import { createSlice } from '@reduxjs/toolkit'

export const postReviewSlice = createSlice({
  name: 'searchInput',
  initialState: {
    date: '',
    emai: '',
    rating: 0,
    review: '',
    title: ''
  },
  reducers: {
    setUser: (state,action) => {
        state.email = action.payload
    },
    setReview: (state, action) => {
        state.review = action.payload
    },
    setRating: (state, action) => {
        state.rating = action.payload
      },
    setTitle: (state, action) => {
        state.title = action.payload
    },
    setDate: (state, action) => {
        state.date = action.payload
    }

  },
})

export const { setUser, setReview, setRating, setTitle, setDate } = postReviewSlice.actions

export default postReviewSlice.reducer
