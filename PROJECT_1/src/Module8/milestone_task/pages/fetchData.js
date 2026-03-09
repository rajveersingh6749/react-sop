export function getData() {
  const res = fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}
