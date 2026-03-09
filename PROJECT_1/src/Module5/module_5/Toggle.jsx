import { createContext, useContext, useState } from 'react'

const ToggleContext = createContext()

function Toggle({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <ToggleContext.Provider value={{ open, setOpen }}>
      {children}
    </ToggleContext.Provider>
  )
}

/* Compound Button */
Toggle.Button = function ToggleButton() {
  const { open, setOpen } = useContext(ToggleContext)

  return (
    <button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'}</button>
  )
}

/* Compound Display + Render Prop */
Toggle.Display = function ToggleDisplay({ render }) {
  const { open } = useContext(ToggleContext)

  return render(open)
}

export default Toggle
