import { useMemo, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'
import AnalyticsPanel from './components/AnalyticsPanel'
import ExpensiveCalculation from './components/ExpensiveCalculation'
import { products } from './data/products'
import './styles/styles.css'

export default function UseMemoDemo() {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [theme, setTheme] = useState('dark')

  // 🔥 Expensive filtering
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...')

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    )
  }, [search])

  // 🔥 Expensive analytics calculation
  const analytics = useMemo(() => {
    console.log('Calculating analytics...')

    let total = 0

    for (let i = 0; i < 100000000; i++) {
      total += i % 10
    }

    return {
      totalProducts: filteredProducts.length,
      totalCartItems: cart.length,
    }
  }, [filteredProducts, cart])

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />

      <div className='dashboard'>
        <div className='left-panel'>
          <SearchBar search={search} setSearch={setSearch} />

          <ProductGrid products={filteredProducts} addToCart={addToCart} />
        </div>

        <div className='right-panel'>
          <AnalyticsPanel analytics={analytics} />

          <Cart cart={cart} />

          <ExpensiveCalculation />
        </div>
      </div>
    </div>
  )
}
