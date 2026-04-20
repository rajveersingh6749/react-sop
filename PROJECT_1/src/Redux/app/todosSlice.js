import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      text: 'learn coding',
    },
  ],
  reducers: {
    addTodo(state, action) {
      state.push({
        text: action.payload,
      })
    },
  },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
