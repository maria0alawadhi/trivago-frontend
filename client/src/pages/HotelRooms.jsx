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
        {rooms.map((room, index) => (
          <Link
            to={`/hotels/${hotelid}/rooms/${room._id}`}
            key={index}
            className="link"
          >
            <RoomCard
              id={index}
              name={room.name}
              img={room.img}
              type={room.type}
              rating={room.rating}
              review={room.review}
              available={room.available}
              facilities={room.facilities}
              price={room.price}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HotelRooms
