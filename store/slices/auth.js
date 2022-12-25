import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'halil',
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = authSlice.actions

export  default authSlice.reducer