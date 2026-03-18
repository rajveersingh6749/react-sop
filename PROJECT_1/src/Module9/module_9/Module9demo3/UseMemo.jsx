import { useMemo, useState } from 'react'
import './UseMemo.css'
import { products } from './components/Users'

const UseMemo = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('low')
  const [darkTheme, setDarkTheme] = useState(true)

  const FilteredProducts = useMemo(() => {
    console.log('Expensive Filtering Running...')

    let result = [...products]

    if (category !== 'All') {
      result = result.filter((p) => p.category === category)
    }

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      )
    }

    result.sort((a, b) =>
      sort === 'low' ? a.price - b.price : b.price - a.price,
    )

    return result
  }, [search, category, sort])

  const totalPrice = useMemo(() => {
    console.log('Calculating total price...')
    return FilteredProducts.reduce((acc, currVal) => acc + currVal.price, 0)
  }, [FilteredProducts])

  const clearFilter = () => {
    setSearch('')
    setCategory('All')
    setSort('low')
  }

  return (
    <div className={darkTheme ? 'light' : 'dark'}>
      <h1>Product Dashboard</h1>

      <div className='filter_bar'>
        <div className='controls'>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search Product...'
          />

          <select onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </select>

          <select onChange={(e) => setSort(e.target.value)}>
            <option value='low'>Price low ➡ high</option>
            <option value='high'>Price high ➡ low</option>
          </select>

          <button onClick={clearFilter}>Clear All Filters</button>
          <button
            onClick={() => setDarkTheme((prev) => !prev)}
          >{`Switch to ${darkTheme ? 'dark' : 'light'} theme`}</button>
        </div>
      </div>

      <div className='product_list'>
        {FilteredProducts.map((p) => (
          <div key={p.id} className='product_details'>
            <h3>
              <span>Product Name: </span>
              {p.name}
            </h3>
            <p>
              <span>Product Category: </span>
              {p.category}
            </p>
            <p>Price: {p.price}</p>
          </div>
        ))}
      </div>

      <h2 className='total_price'>Total Price: {totalPrice}</h2>
    </div>
  )
}

export default UseMemo
