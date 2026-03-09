// import './App.css'
import useFormInput from './hooks/userForm'
// import { useState } from 'react'
// import Counter from './milestone_task/Counter'
import Fetch from './Fetch'

function App() {
  const firstNameProps = useFormInput('Jane')
  const lastNameProps = useFormInput('Doe')
  // const [firstName, setFirstName] = useState('Mary')
  // const [lastName, setLastName] = useState('Poppins')

  // function handleFirstNameChange(e) {
  //   setFirstName(e.target.value)
  // }

  // function handleLastNameChange(e) {
  //   setLastName(e.target.value)
  // }

  return (
    <>
      <h1>Module 4:</h1>
      <h2>Custom Hook Implementation:</h2>
      <label>
        First Name: <input {...firstNameProps} />
      </label>
      <br />
      <label>
        Last Name: <input {...lastNameProps} />
      </label>
      <br />
      <p>
        <b>
          Good Morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>

      <br />
      {/* <Counter /> */}
      <h2>useFetch custom hook: </h2>
      <Fetch />

      {/* <label>
        First name:
        <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        <b>
          Good morning, {firstName} {lastName}.
        </b>
      </p> */}
    </>
  )
}

export default App
