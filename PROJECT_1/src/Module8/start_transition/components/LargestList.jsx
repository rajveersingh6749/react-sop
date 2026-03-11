import './LargestList.css'

const LargestList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <div key={item.id} className='list'>
            <li>{`No. ${index} : ${item.title}`}</li>
            <li>Album Id: {item.albumId}</li>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default LargestList
