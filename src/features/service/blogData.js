import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  list: [],
  userData: [],
  isFullList: false
}

const fetchListDataPaging = createAsyncThunk(
  'blog/dataPaging',
  async (page) => {
    const response = await axios(`http://localhost:3001/blogs?page=${page}`)
    
    return  response?.data 
  }
)

const fetchUserData = createAsyncThunk(
  'blog/userDetal',
  async (id) => {
    console.log('id', id)
    const response = await axios(`http://localhost:3001/blogs/${id}`)
    
    return  response?.data
  }
)


export const blogData = createSlice({
  name: 'blogData',
  initialState,
  reducers: {
    setNewBlog: (state, action) => {
      state.list = [...state.list, action.payload]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchListDataPaging.fulfilled, (state, action) => {
      const  list  = action.payload

      state.list = [...state.list, ...list]
      state.isFullList = !list.length

    });

    builder.addCase(
      fetchUserData.fulfilled, (state, action) => {
      const userData = action.payload

      state.userData = [...userData]

    })
  }
})

export const  {
  setNewBlog
} = blogData.actions

export { fetchListDataPaging, fetchUserData }

export default blogData.reducer