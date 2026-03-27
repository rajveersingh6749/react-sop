import { render, screen } from '@testing-library/react'
import App from './App'

test('render h1 element', () => {
  render(<App />)
  const linkElement = screen.getByText(/This is my react application/i)
  expect(linkElement).toBeInTheDocument()
})
