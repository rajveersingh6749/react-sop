import { useMemo, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import StatsPanel from './components/StatsPanel'
import { products } from './data/products'
import './styles/styles.css'

export default function ReactMemoDemo() {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [theme, setTheme] = useState('dark')

  const filteredProducts = useMemo(() => {
    console.log('Filtering products...')

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    )
  }, [search])

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />

      <div className='dashboard'>
        <div className='left-panel'>
          <SearchBar search={search} setSearch={setSearch} />

          <ProductList products={filteredProducts} addToCart={addToCart} />
        </div>

        <div className='right-panel'>
          <Cart cart={cart} />
          <StatsPanel cart={cart} />
        </div>
      </div>
    </div>
  )
}
