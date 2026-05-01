import Header from './components/Header'
import UserGrid from './components/UserGrid'
import './styles/style.css'

const USERS = [
  {
    id: 1,
    name: 'Rajveer Singh',
    role: 'Admin',
    status: 'active',
    avatar: '',
  },
  {
    id: 2,
    name: 'Amit Shah',
    role: 'User',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'Sara Khan',
    role: 'Manager',
    status: 'active',
    avatar: '',
  },
  {
    id: 4,
    name: 'Sara Khan',
    role: 'Manager',
    status: 'active',
    avatar: '',
  },
  {
    id: 5,
    name: 'Sara Khan',
    role: 'Manager',
    status: 'active',
    avatar: '',
  },
  {
    id: 6,
    name: 'Sara Khan',
    role: 'Manager',
    status: 'active',
    avatar: '',
  },
  {
    id: 7,
    name: 'Sara Khan',
    role: 'Manager',
    status: 'active',
    avatar: '',
  },
  {
    id: 8,
    name: 'Sara Khan',
    role: 'Manager',
    status: 'active',
    avatar: '',
  },
  {
    id: 9,
    name: 'Sara Khan',
    role: 'Manager',
    status: 'active',
    avatar: '',
  },
  {
    id: 10,
    name: 'Sara Khan',
    role: 'Manager',
    status: 'active',
    avatar: '',
  },
]

export default function Props() {
  return (
    <div className='app'>
      <Header title='Team Dashboard' />
      <UserGrid users={USERS} />
    </div>
  )
}
