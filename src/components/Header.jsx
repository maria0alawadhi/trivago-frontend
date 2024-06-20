import '../App.css'
import { Link } from 'react-router-dom'

const Header = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <div className="head">
          <Link to="/">Home</Link>
          <Link to="/reservations">Reservations</Link>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </div>
        <div>
          <h3 className="greeting">Welcome {user.email}!</h3>
        </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return <header>{user ? userOptions : publicOptions}</header>
}

export default Header
