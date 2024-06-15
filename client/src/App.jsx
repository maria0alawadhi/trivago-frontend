import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import HotelRooms from './pages/HotelRooms'
import Reservations from './pages/Reservations'
import './App.css'

import Header from './components/Header'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
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
          <Route path="/hotels/:id/rooms" element={<HotelRooms />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reservations" element={<Reservations user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
