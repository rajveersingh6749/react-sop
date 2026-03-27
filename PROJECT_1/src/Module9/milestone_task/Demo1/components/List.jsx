const List = ({ filteredData }) => {
  console.log('Child component rendering...')
  
  return (
    <div>
      <h3>List</h3>
      <ul>
        {filteredData().map((user, index) => (
          <li key={index}>{`${index + 1}. ${user}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
