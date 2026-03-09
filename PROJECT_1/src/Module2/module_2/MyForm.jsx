import { useState } from 'react'

const MyForm = () => {
  const [name, setName] = useState('')

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert(name)
  }

  return (
    <div>
      <h1>Module 2:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:{' '}
          <input type='text' value={name} onChange={handleChange} />
        </label>

        <input type='submit' />
      </form>
    </div>
  )
}

export default MyForm
