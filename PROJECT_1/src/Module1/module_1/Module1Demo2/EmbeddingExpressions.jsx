import { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import ProductGrid from './components/ProductGrid'

const PRODUCTS = [
  { id: 1, name: 'iPhone 15', price: 800, category: 'mobile' },
  { id: 2, name: 'MacBook Pro', price: 2000, category: 'laptop' },
  { id: 3, name: 'AirPods', price: 200, category: 'accessory' },
  { id: 4, name: 'Samsung S23', price: 700, category: 'mobile' },
]

export default function EmbeddingExpressions() {
  const [search, setSearch] = useState('')

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className='app'>
      <Navbar title='Tech Store' />
      <SearchBar search={search} setSearch={setSearch} />
      <ProductGrid products={filteredProducts} />
    </div>
  )
}
