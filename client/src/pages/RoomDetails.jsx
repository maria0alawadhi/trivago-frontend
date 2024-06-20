import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import RoomDetail from '../components/RoomDetail'
import { useNavigate } from 'react-router-dom'
const RoomDetails = ({ user }) => {
  const [room, setRoom] = useState(null)
  const { hotelid, roomid } = useParams()
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/hotels/${hotelid}/rooms/${roomid}`
        )
        setRoom(response.data)
      } catch (error) {
        console.log('Error Connecting', error)
      }
    }

    getRoom()
  }, [hotelid, roomid])

  if (!room) {
    return null
  }

  const handleSubmit = async (e) => {
    try {
      const reserv = await axios.post(
        `http://localhost:3001/hotels/${hotelid}/rooms/${roomid}`,
        {
          room: roomid,
          checkIn,
          checkOut,
          user: user.id
        }
      )
      console.log(reserv.config.data)
      navigate('/reservations')
    } catch (error) {
      console.error('Error making reservation:', error)
    }
  }

  return (
    <div className="Room-detail">
      <h2 className="room-text">Room Details</h2>
      <div className="room">
        <RoomDetail
          room={room}
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          handleSubmit={handleSubmit}
          user={user}
        />
      </div>
    </div>
  )
}

export default RoomDetails
