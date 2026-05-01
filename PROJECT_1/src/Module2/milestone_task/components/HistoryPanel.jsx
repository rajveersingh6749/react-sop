import '../styles/style.css'

const HistoryPanel = ({ history }) => {
  return (
    <div className='history'>
      <h3 className='history_tag'>History</h3>
      {history.length === 0 ? (
        <p>No actions yet</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default HistoryPanel
