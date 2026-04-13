import './List.css'

const List = ({ items = [] }) => {
  // console.log('ITEMS: ', items)

  return (
    <div className='list'>
      <h2>Users</h2>

      {items.length === 0 ? (
        <p>no users found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Skills</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Exp</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.skills.join(', ')}</td>
                <td>{item.role}</td>
                <td>{item.phone}</td>
                <td>{item.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default List
