import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import RoomCard from '../components/RoomCard'
const HotelRooms = () => {
  const [rooms, setRooms] = useState([])

  const { hotelid } = useParams()
  useEffect(() => {
    const rooms = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/hotels/${hotelid}/rooms`
        )
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
          let avgRating = 0

          room.rating.forEach((rate) => {
            avgRating += rate
          })
          avgRating = avgRating / room.rating.length

          return (
            <Link
              to={`/hotels/${hotelid}/rooms/${room._id}`}
              key={index}
              className="link"
            >
              <RoomCard room={room} avgRating={avgRating} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default HotelRooms
