import { useEffect, useState } from 'react'
import '../styles/style.css'

const ControlledForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [renders, setRenders] = useState(0)

  useEffect(() => {
    setRenders((r) => r + 1)
  }, [name, email])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Controlled: ${name}, ${email}`)
  }

  return (
    <div className='card'>
      <h2>Controlled Form (State)</h2>
      <p className='render'>Renders: {renders}</p>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter name...'
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email...'
          required
        />

        <button disabled={!name || !email}>Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm
