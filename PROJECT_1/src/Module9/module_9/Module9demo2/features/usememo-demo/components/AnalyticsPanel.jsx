import '../styles/styles.css'

export default function AnalyticsPanel({ analytics }) {
  return (
    <div className='panel'>
      <h2>📊 Analytics</h2>

      <p>Total Visible Products: {analytics.totalProducts}</p>

      <p>Total Cart Items: {analytics.totalCartItems}</p>
    </div>
  )
}
