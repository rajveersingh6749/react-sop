import { createPortal } from 'react-dom'

const Modal = ({ title, onClose, children }) => {
  return createPortal(
    <div style={bgContainer}>
      <div style={modalContainer}>
        <h2>{title}</h2>
        <div>{children}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body,
  )
}

const bgContainer = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const modalContainer = {
  background: 'black',
  borderRadius: '8px',
  minWidth: '300px',
  padding: '20px',
}

export default Modal
