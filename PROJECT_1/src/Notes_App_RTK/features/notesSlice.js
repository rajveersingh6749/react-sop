import { createSlice } from '@reduxjs/toolkit'

const loadNotes = () => {
  try {
    const data = localStorage.getItem('notes')
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.log('Error: ', error)
    return []
  }
}

const initialState = {
  notes: loadNotes(),
  filter: 'ALL'
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push({
        id: Date.now(),
        ...action.payload,
      })
    },
    updateNote: (state, action) => {
      const { id, updatedData } = action.payload
      const note = state.notes.find((n) => n.id === id)
      if (note) {
        Object.assign(note, updatedData)
      }
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload)
    },
    filterNotes: (state, action) => {
        state.filter = action.payload
    }
  },
})

export const selectFilteredNotes = (state) => {
  const { notes, filter } = state.notes

  if (filter === 'WORK') {
    return notes.filter((note) => note.category === 'Work')
  }

  if (filter === 'PERSONAL') {
    return notes.filter((note) => note.category === 'Personal')
  }

  if (filter === 'IDEAS') {
    return notes.filter((note) => note.category === 'Ideas')
  }

  return notes // ALL
}

export const { addNote, updateNote, deleteNote, filterNotes } = notesSlice.actions
export default notesSlice.reducer
