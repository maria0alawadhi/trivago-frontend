import React from 'react'
import '../App.css'

const RoomDetail = ({
  room,
  handleSubmit,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut
}) => {
  const handleFormSubmit = (event) => {
    event.preventDefault()
    handleSubmit({ checkIn, checkOut })
  }

  return (
    <div className="room-detail" id={room.id}>
      <img src={room.img} alt={room.name} />
      <h3>Room name: {room.name}</h3>
      <h4>Type: {room.type}</h4>
      <h5>Price: {room.price} BD</h5>
      <h5>Review: {room.review}</h5>
      <h5>Facilities: {room.facilities.join(', ')}</h5>

      <form onSubmit={handleFormSubmit}>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => {
            setCheckIn(e.target.value)
          }}
          required
        />
        <input
          type="date"
          value={checkOut}
          onChange={(e) => {
            setCheckOut(e.target.value)
          }}
          required
        />
        <button type="submit">Confirm</button>
      </form>
    </div>
  )
}

export default RoomDetail
