import React, { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import { useParams } from 'react-router'
import { BASE_URL } from '../services/api'
const RoomDetail = ({
  room,
  handleSubmit,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  user
}) => {
  const [Room, setRoom] = useState([])
  const { roomid } = useParams()

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted with dates:', checkIn, checkOut)
    handleSubmit({ checkIn, checkOut })
  }

  useEffect(() => {
    const reviewRoom = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/reviews/${roomid}`)
        setRoom(response.data)
      } catch (error) {
        console.error('Error Data Fetching:', error)
      }
    }
    reviewRoom()
  }, [roomid])





  return (
    <div className="room-detail" id={room.id}>
      <img src={room.img} alt={room.name} />
      <h3>Room name: {room.name}</h3>
      <h4>Type: {room.type}</h4>
      <h5>Price: {room.price} BD</h5>
      <h5>Reviews: </h5>
      <ul>
        {Room.map((room, index) => (
          <div key={index}>
            {room.review}
       
            </div>
        ))}
      </ul>
      <h5>Facilities: {room.facilities.join(', ')}</h5>
      {user && (
        <div className="container">
          <div>reservation info:</div>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="checkIn">
              Check In Date:
              <input
                type="date"
                value={checkIn}
                name="checkIn"
                onChange={(e) => {
                  console.log('Check-in date selected:', e.target.value)
                  setCheckIn(e.target.value)
                }}
                required
              />
            </label>
            <label htmlFor="checkOut">
              Check In Date:
              <input
                type="date"
                value={checkOut}
                onChange={(e) => {
                  console.log('Check-out date selected:', e.target.value)
                  setCheckOut(e.target.value)
                }}
                required
              />
            </label>
            <button type="submit">Confirm</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default RoomDetail
