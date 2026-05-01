import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return

    const controller = new AbortController()

    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(url, { signal: controller.signal })
        const json = await res.json()
        setData(json)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}

export default useFetch
