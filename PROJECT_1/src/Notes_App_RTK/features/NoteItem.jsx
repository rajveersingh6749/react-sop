import { useState } from 'react'
import './NoteItem.css'
import { useDispatch } from 'react-redux'
import { deleteNote, updateNote } from './notesSlice'

const NoteItem = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(note.title)
  const [editedContent, setEditedContent] = useState(note.content)

  const dispatch = useDispatch()

  const handleSave = () => {
    dispatch(
      updateNote({
        id: note.id,
        updatedData: {
          title: editedTitle,
          content: editedContent,
        },
      }),
    )

    setIsEditing(false)
  }

  const handleDelete = () => {
    if (confirm('Delete this note?')) {
      dispatch(deleteNote(note.id))
    }
  }

  return (
    <div className='list_note_item'>
      {isEditing ? (
        <div className='edit_section'>
          <input
            type='text'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            type='text'
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
          <h4>{note.title}</h4>
          <p>{note.content}</p>
          <span>{note.category}</span>

          <div className='actions'>
            <button className='btn' onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className='btn' onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default NoteItem
