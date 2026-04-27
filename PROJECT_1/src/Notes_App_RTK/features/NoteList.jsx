import { useDispatch, useSelector } from 'react-redux'
import './NoteList.css'
import NoteItem from './NoteItem'
import { filterNotes } from './notesSlice'
import { selectFilteredNotes } from './notesSlice'

const NoteList = () => {
  const notes = useSelector(selectFilteredNotes)

  const dispatch = useDispatch()

  return (
    <div className='note_list'>
      <div className='filter_container'>
        <button className='filter' onClick={() => dispatch(filterNotes('ALL'))}>
          All
        </button>
        <button
          className='filter'
          onClick={() => dispatch(filterNotes('WORK'))}
        >
          Work
        </button>
        <button
          className='filter'
          onClick={() => dispatch(filterNotes('PERSONAL'))}
        >
          Personal
        </button>
        <button
          className='filter'
          onClick={() => dispatch(filterNotes('IDEAS'))}
        >
          Ideas
        </button>
      </div>
      <ul>
        {notes.length === 0 ? (
          <p>No notes found</p>
        ) : (
          notes && notes.map((note) => <NoteItem key={note.id} note={note} />)
        )}
      </ul>
    </div>
  )
}

export default NoteList
