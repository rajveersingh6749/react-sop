import { useState } from 'react'
import Modal from './Modal'
import Timer from './Timer'

function MyApp() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <h1>Milestone Task 5:</h1>
      <h2>My App</h2>
      <button onClick={() => setIsOpen(true)}>Open Timer Modal</button>

      {isOpen && (
        <Modal title='Timer Modal' onClose={() => setIsOpen(false)}>
          <Timer />
        </Modal>
      )}
    </>
  )
}

export default MyApp
