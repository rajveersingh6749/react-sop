const Child = ({ increment }) => {
  console.log('Child re-rendered!')

  return (
    <div>
      <button onClick={increment}>Log From Child</button>
    </div>
  )
}

export default Child
