import { useState } from 'react'
import Pet from './components/Pet'

export default function Temp() {
  const [legs, setLegs] = useState(4) // Default value

  const handleLegsChange = (e) => {
    const value = e.target.value
    // For demonstration purposes: if the input is a string, pass it as is; otherwise, convert to a number
    setLegs(isNaN(value) ? value : Number(value))
  }

  return (
    <div>
      <h1>PropTypes Examples</h1>
      <Pet animal='Dog' color='Brown' legs={legs} />

      <label>
        Modify Number of Legs:
        <input type='text' value={legs} onChange={handleLegsChange} />
      </label>
    </div>
  )
}
