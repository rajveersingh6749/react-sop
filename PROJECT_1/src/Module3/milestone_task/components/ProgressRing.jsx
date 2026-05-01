import '../styles/style.css'

const ProgressRing = ({ seconds }) => {
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const progress = seconds % 60
  const offset = circumference - (progress / 60) * circumference

  return (
    <svg className='ring' width='150' height='150'>
      <circle
        cx='75'
        cy='75'
        r={radius}
        stroke='#444'
        strokeWidth='8'
        fill='none'
      />
      <circle
        cx='75'
        cy='75'
        r={radius}
        stroke='#3b82f6'
        strokeWidth='8'
        fill='none'
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap='round'
      />
    </svg>
  )
}

export default ProgressRing
