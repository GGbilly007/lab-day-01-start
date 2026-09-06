import { users } from './data/users.js'
import Layout from './components/Layout.jsx'
import ProfileCard from './components/ProfileCard.jsx'

function App() {
  return (
    <Layout>
      {users.map((user) => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </Layout>
  )
}

export default App
