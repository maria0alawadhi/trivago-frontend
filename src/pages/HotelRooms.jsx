import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import RoomCard from '../components/RoomCard'
import { BASE_URL } from '../services/api'
const HotelRooms = () => {
  const [rooms, setRooms] = useState([])

  const { hotelid } = useParams()
  useEffect(() => {
    const rooms = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/hotels/${hotelid}/rooms`)
        setRooms(response.data)
      } catch (error) {
        console.log('Error Connecting', error)
      }
    }

    rooms()
  }, [hotelid])

  return (
    <div className="Room-card">
      <h2>Hotel Rooms</h2>
      <div className="rooms">
        {rooms.map((room, index) => {
          return (
            <Link
              to={`/hotels/${hotelid}/rooms/${room._id}`}
              key={index}
              className="link"
            >
              <RoomCard room={room} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default HotelRooms
