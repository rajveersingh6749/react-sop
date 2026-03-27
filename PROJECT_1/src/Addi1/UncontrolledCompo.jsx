import { useRef } from 'react'

const UncontrolledCompo = () => {
  const nameRef = useRef('')
  const emailRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Name: ' + nameRef.current.value)
    console.log('Email: ' + emailRef.current.value)
    alert(`Name: ${nameRef.current.value}`)
  }

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <p>Name: {nameRef.current.value}</p>
      <p>Email: {emailRef.current.value}</p>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={nameRef} placeholder='enter name...' required />
        <input
          type='email'
          ref={emailRef}
          placeholder='enter email...'
          required
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default UncontrolledCompo
