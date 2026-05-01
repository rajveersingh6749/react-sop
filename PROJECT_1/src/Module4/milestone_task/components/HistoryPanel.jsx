import '../styles/style.css'

const HistoryPanel = ({ history }) => {
  return (
    <div className='history'>
      <h3>History</h3>
      {history.length === 0 ? (
        <p>No actions yet</p>
      ) : (
        <ul>
          {history.map((h) => (
            <li key={h.id}>{h.text}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default HistoryPanel
