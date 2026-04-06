import '../styles/error.css'

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className='error-box'>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  )
}
