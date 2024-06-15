import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const RoomDetails = () => {
  const [roomDetails, setRoomDetails] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const RoomDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/hotels/${id}/rooms/${room._id}`
        )
        setRoomDetails(response.data)
        console.log(response.data)
      } catch (error) {
        console.log('Error Connecting', error)
      }
    }

    RoomDetails()
  }, [])

  return (
    <div className="room-content">
      <section className="image-container">
        <div>
          <img src={roomDetails.img} alt="roomDetails" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h3>{roomDetails.name}</h3>
          <h4> {roomDetails.facilities}</h4>
          {roomDetails.review}
        </div>
      </section>
    </div>
  )
}

export default RoomDetails
