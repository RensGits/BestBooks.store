import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


// First, create the thunk
export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async () => {
    const { data } = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/full-overview/get?api-key=Am2A6IJRbo3Th1MuXSgBVRT1AWWjr21P`)
    return data
  }
)

// Then, handle actions in your reducers:
const allBooksSlice = createSlice({
  name: 'allBooks',
  initialState: { 
      loading: null,
      data: {
        results: {
          bestsellers_date:"",
          lists: [{
              books:[{
                age_group: "",
                amazon_product_url: "",
                article_chapter_link: "",
                author: "",
                book_image: "",
                book_image_height: 0,
                book_image_width: 0,
                book_review_link: "",
                book_uri: "",
                buy_links: [{}],
                contributor: "",
                contributor_note: "",
                created_date: "",
                description: "",
                first_chapter_link: "",
                price: "",
                primary_isbn10: "",
                primary_isbn13: "",
                publisher: "",
                rank: 0,
                rank_last_week: 0,
                sunday_review_link: "",
                title: "",
                updated_date: "",
                weeks_on_list: 0
              }],
            display_name: "",
            list_id: 0,
            list_image: "",
            list_image_height: "",
            list_image_width: "",
            list_name: "",
            list_name_encoded: "",
            updated: ""
          },
            
            
        ],
          next_published_date: "",
          previous_published_date: "",
          published_date: "",
          published_date_description: ""
        }
      }
   },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    [fetchAllBooks.pending](state){
        state.loading = 'loading'
    },
    [fetchAllBooks.fulfilled](state, {payload}){
        state.loading = 'completed'
        state.data = payload
        
    },
    [fetchAllBooks.rejected](state){
        state.loading = 'rejected'
    }
  },
})

export default allBooksSlice.reducer

