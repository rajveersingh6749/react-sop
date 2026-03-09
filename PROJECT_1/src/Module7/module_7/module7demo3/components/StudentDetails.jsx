import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { students } from '../data'
import './StudentDetails.css'

const StudentDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const student = students.find((s) => s.id === JSON.parse(id))
  // console.log('Student: ', student)

  if (!student) {
    return <Navigate to='/module7demo3/students' replace />
  }

  const handleClick = () => {
    navigate('/module7demo3/students')
  }

  return (
    <div className='user_data'>
      <button onClick={handleClick}>Visit List</button>
      <h1>Student Details</h1>
      <p>
        <b>Name: </b>
        {student.name}
      </p>
      <p>
        <b>Skill: </b>
        {student.skill}
      </p>
      <p>
        <b>Email: </b>
        {student.email}
      </p>
      <address>
        <b>Address: </b>
        {student.address}
      </address>
      <p>
        <b>Department: </b>
        {student.department}
      </p>
    </div>
  )
}

export default StudentDetails
