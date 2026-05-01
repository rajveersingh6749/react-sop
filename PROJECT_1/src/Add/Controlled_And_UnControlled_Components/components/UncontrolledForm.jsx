import { useRef, useState } from 'react'
import '../styles/style.css'

const UncontrolledForm = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const [renders] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const email = emailRef.current.value

    if (!name) {
      alert('Name required')
      return
    }

    alert(`Uncontrolled: ${name}, ${email}`)
  }

  return (
    <div className='card'>
      <h2>Uncontrolled Form (useRef())</h2>
      <p className='render'>Renders: {renders}</p>

      <form onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder='Enter name...' />
        <input ref={emailRef} placeholder='Enter email...' />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm
