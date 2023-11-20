import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  typeBlog: 'All',
  userId: 0,
}

export const blogTypeSlice = createSlice({
  name: 'blogType',
  initialState,
  reducers: {
    setTypeBlog: (state, action) => {
      state.typeBlog = action.payload
    },

    setUserId: (state, action) => {
      state.userId = action.payload
    },
  },
})


export const { 
  setTypeBlog, 
  setUserId, 
  setIncreasedLike 
} = blogTypeSlice.actions

export default blogTypeSlice.reducer