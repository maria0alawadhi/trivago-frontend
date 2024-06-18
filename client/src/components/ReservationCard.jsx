import '../App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ReservationCard = ({ reservations }) => {
  let navigate = useNavigate()

  const [roomData, setRoomData] = useState([])

  const handleDelete = async (reservationId) => {
    if (window.confirm('Are you sure you want to delete this reservation?')) {
      try {
        await axios.delete(
          `http://localhost:3001/reservations/${reservationId}`
        )
        navigate('/')
      } catch (error) {
        console.error('Error deleting a reservation', error)
      }
    }
  }

  // useEffect(() => {
  //   const rooms = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3001/rooms`
  //       )
  //       setRoomData(response.data)
  //     } catch (error) {
  //       console.log('Error Connecting', error)
  //     }
  //   }

  //   rooms()
  // }, [])

  // const currentUserRoom = roomData.filter(
  //   (room) => room.id === reservations.id
  // );

  //    console.log('currentUserRoom: ' + JSON.stringify(currentUserRoom,null,2))

  //  console.log('reservations: ' + JSON.stringify(reservations,null,2))
  return (
    <div>
      {reservations.map((reservation, index) => (
        <div className="reservation-card" key={index}>
          <div>
            {/* <img src={} alt="img" />  */} {/* Placeholder for image  */}
          </div>
          <div>
            <p>
              <b>Room Name:</b>
            </p>
            <p className="check-in">
              <b>Check-In Date:</b> {reservation.checkIn.slice(0, 10)}
            </p>
            <p className="check-out">
              <b>Check-Out Date:</b> {reservation.checkOut.slice(0, 10)}
            </p>
          </div>
          <div>
            <button className="btn btn-edit">Edit</button>
            <button
              className="btn btn-delete"
              onClick={() => handleDelete(reservation._id)}
            >
              Delete
            </button>
            <button className="btn btn-review">Review</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReservationCard
