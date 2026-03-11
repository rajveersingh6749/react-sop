const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export const usersPromise = fetch(BASE_URL).then((res) => {
  if (!res.ok) {
    throw new Error('Failed to fetch users')
  }
  return res.json()
})
