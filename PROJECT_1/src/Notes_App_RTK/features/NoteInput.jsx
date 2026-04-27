import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from './notesSlice'
import NoteList from './NoteList'
import './NoteInput.css'

const NoteInput = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('Work')

  const dispatch = useDispatch()

  const handleAdd = () => {
    if (!title.trim() || !content.trim()) return
    dispatch(
      addNote({
        title,
        content,
        category,
      }),
    )

    setTitle('')
    setContent('')
    setCategory('Work')
  }

  return (
    <div className='input_container'>
      <h2>MyNotes</h2>

      <div className='notes_app'>
        <div className='input_form_container'>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title...'
          />
          <textarea
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Write your note...'
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value='Work'>Work</option>
            <option value='Personal'>Personal</option>
            <option value='Ideas'>Ideas</option>
          </select>
          <button
            onClick={handleAdd}
            disabled={!title.trim() || !content.trim()}
            className='add_btn'
          >
            Add Note
          </button>
        </div>

        <NoteList />
      </div>
    </div>
  )
}

export default NoteInput
