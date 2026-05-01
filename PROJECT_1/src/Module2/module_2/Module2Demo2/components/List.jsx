import './List.css'

const List = ({ items = [], handleEdit, handleDelete }) => {
  return (
    <div className='list'>
      <h2>Users</h2>

      {items.length === 0 ? (
        <p>no users found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Skills</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Exp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.skills.join(', ')}</td>
                <td>{item.role}</td>
                <td>{item.phone}</td>
                <td>{item.experience}</td>
                <td className='actions_btns'>
                  <button
                    onClick={() => handleEdit(item)}
                    className='action_btn'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className='action_btn delete_btn'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default List
