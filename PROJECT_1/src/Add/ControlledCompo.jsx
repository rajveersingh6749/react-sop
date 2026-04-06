import { useState } from 'react'

const ControlledCompo = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`${inputValue}`)
    setInputValue('')
  }

  return (
    <div>
      <h1>Controlled Component</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: {' '}
          <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange}
          placeholder='enter your name..' 
          />
        </label>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ControlledCompo
