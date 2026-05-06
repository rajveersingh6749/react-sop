import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: '',
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.data += action.payload
    },
    calculate: (state) => {
      try {
        state.data = eval(state.data).toString()
      } catch (err) {
        state.data = 'Error'
        console.log(err)
      }
    },
    clear: (state) => {
      state.data = ''
    },
    back: (state) => {
      state.data = state.data.slice(0, -1)
    },
  },
})

export const { addValue, calculate, clear, back } = calculatorSlice.actions
export default calculatorSlice.reducer
