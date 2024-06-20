import '../App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ReservationCard = ({ reservations, setUpdateRes }) => {
  const [rooms, setRooms] = useState(null)
  const handleDelete = async (reservationId) => {
    if (window.confirm('Are you sure you want to delete this reservation?')) {
      try {
        await axios.delete(
          `http://localhost:3001/reservations/${reservationId}`
        )
        setUpdateRes((prevData) => !prevData)
      } catch (error) {
        console.error('Error deleting a reservation', error)
      }
    }
  }

  const handleReviewClick = (roomId) => {
    navigate(`/reviews/${roomId}`)
  }

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/rooms`)
        setRooms(response.data)
      } catch (error) {
        console.log('Error Connecting', error)
      }
    }

    fetchRooms()
  }, [])

  return (
    <div>
      {reservations.map((reservation, index) => (
        <div className="reservation-card" key={index}>
          {rooms &&
            (rooms.find((room) => room._id === reservation.room) ? (
              <div className="row">
                <div className="col">
                  <img
                    className="reservation-img"
                    src={
                      rooms.find((room) => room._id === reservation.room).img
                    }
                    alt="room-img"
                  />
                </div>
                <div className="col">
                  <p>
                    <b>Room Name:</b>
                    {rooms.find((room) => room._id === reservation.room).name}
                  </p>
                  <p>
                    <b>Price:</b>
                    {rooms.find((room) => room._id === reservation.room).price}
                    BD
                  </p>
                  <p className="check-in">
                    <b>Check-In Date:</b> {reservation.checkIn.slice(0, 10)}
                  </p>
                  <p className="check-out">
                    <b>Check-Out Date:</b> {reservation.checkOut.slice(0, 10)}
                  </p>
                </div>
              </div>
            ) : (
              <p>Room details not found.</p>
            ))}
          <div>
            <button className="btn btn-edit">Edit</button>
            <button
              className="btn btn-delete"
              onClick={() => handleDelete(reservation._id)}
            >
              Delete
            </button>
            <button
              className="btn btn-review"
              onClick={() => handleReviewClick(reservation.room)}
            >
              Review
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReservationCard
