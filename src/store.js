import { configureStore } from '@reduxjs/toolkit'
import toggleActiveReducer from './features/active/activeSlice'
import  blogTypeReducer  from './features/blog/blogSlice'
import  blogDataReducer  from './features/service/blogData'

export const store = configureStore({
  reducer: {
    active: toggleActiveReducer,
    blogType: blogTypeReducer,
    blogData: blogDataReducer
  },
})
