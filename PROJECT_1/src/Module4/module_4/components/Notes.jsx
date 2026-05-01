import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import '../styles/style.css'

const Notes = () => {
  const [notes, setNotes] = useLocalStorage('notes', [])
  const [text, setText] = useState('')

  const addNote = () => {
    if (!text) return

    const newNote = {
      id: Date.now(), // ✅ unique id
      title: text,
      content: text,
    }

    setNotes([...notes, newNote])
    setText('')
  }

  return (
    <div className='card'>
      <h3>Notes (Saved)</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Write note...'
      />
      <button onClick={addNote}>Add</button>

      <ul>
        {notes.map((n) => (
          <li key={n.id}>{n.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Notes
