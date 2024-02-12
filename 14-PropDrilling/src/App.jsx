
import './App.css'
import UserComponent from './components/UserComponent'

function App() {
  const user = {
    name: 'John Doe',
    email: 'john@mail.com',
    age: 25,
    address: {
      street: 'Main st',
      city: 'Boston',
      state: 'MA'
    },
  }

  return (
    <>
      <UserComponent user={user} />
    </>
  )
}

export default App
