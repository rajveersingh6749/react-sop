import { useEffect, useState } from 'react'
import '../styles/card.css'

export default function ProductList() {
  const [products, setProducts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch products')
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err))
  }, [])

  if (error) throw error

  if (!products) return <div className='card'>Loading products...</div>

  return (
    <div className='card'>
      <h3>Products</h3>
      <hr />
      <ul>
        {products.map((p, index) => (
          <li key={p.id}>{`${index + 1}. ${p.title}`}</li>
        ))}
      </ul>
    </div>
  )
}
