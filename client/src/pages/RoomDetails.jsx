import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import RoomDetail from '../components/RoomDetail'

const RoomDetails = () => {
  const [room, setRoom] = useState(null)
  const { hotelid, roomid } = useParams()

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

  return (
    <div className="Room-detail">
      <h2 className="room-text">Room Details</h2>
      <div className="room">
        <RoomDetail
          id={room._id}
          name={room.name}
          img={room.img}
          type={room.type}
          rating={room.rating}
          review={room.review}
          available={room.available}
          facilities={room.facilities}
          price={room.price}
        />
      </div>
    </div>
  )
}

export default RoomDetails
