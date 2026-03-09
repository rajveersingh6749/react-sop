import { Link } from 'react-router-dom'
import { students } from '../data.js'
import './Students.css'

const Students = () => {
  return (
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <div key={student.id}>
          <Link
            to={`/module7demo3/students/${student.id}`}
            className='student_links'
          >
            {student.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Students
