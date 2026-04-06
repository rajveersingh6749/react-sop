import { useState } from 'react'

const ControlledCount = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Name: ', name)
    console.log('Email: ', email)
  }

  return (
    <div>
      <h1>Controlled Component</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='enter name...'
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='enter email... '
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ControlledCount
