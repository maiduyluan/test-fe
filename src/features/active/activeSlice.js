import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggleForm: false,
  toggleSort: false,
  activeButtonCategory: 0,
}

export const toggleActiveSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    setToggleForm: (state) => {
      state.toggleForm = !state.toggleForm
    },

    setActiveButtonCategory: (state, action) => {
      state.activeButtonCategory = action.payload
    },

    setToggleSort: (state) => {
      state.toggleSort = !state.toggleSort
    }
  },
})


export const { 
  setToggleForm, 
  setActiveButtonCategory, 
  setToggleSort 
} = toggleActiveSlice.actions

export default toggleActiveSlice.reducer