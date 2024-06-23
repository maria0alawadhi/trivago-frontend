import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import './App.css'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import HotelRooms from './pages/HotelRooms'
import Reservations from './pages/Reservations'
import RoomDetails from './pages/RoomDetails'
import EditReservForm from './pages/EditReservForm'
import ReviewForm from './pages/ReviewForm'
import AboutUs from './pages/AboutUs'
import Header from './components/Header'

const App = () => {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <Header user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels/:hotelid/rooms" element={<HotelRooms />} />
          <Route
            path="/hotels/:hotelid/rooms/:roomid"
            element={<RoomDetails user={user} />}
          />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Edit" element={<EditReservForm />} />
          <Route path="/reservations" element={<Reservations user={user} />} />
          <Route path="/reviews/:roomid" element={<ReviewForm user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
