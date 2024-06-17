import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ReservationCard = ({ reservations }) => {
  let navigate = useNavigate()
  const checkIn = reservations.checkIn
  const checkOut = reservations.checkOut
  const checkInDate = checkIn.slice(0, 10)
  const checkOutDate = checkOut.slice(0, 10)

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this reservation?')) {
      try {
        await axios.delete(
          `http://localhost:3001/reservations/${reservations._id}`
        )
        navigate('/')
      } catch (error) {
        console.error('Error deleting a reservation', error)
      }
    }
  }

  return (
    <div className="reservation-card">
      <div>
        {/* <img src={} alt="img" />  */} {/* Placeholder for image  */}
      </div>
      <div>
        <p className="check-in">
          <b>Check-In Date:</b> {checkInDate}
        </p>
        <p className="check-out">
          <b>Check-Out Date:</b> {checkOutDate}
        </p>
      </div>
      <div>
        <button className="btn btn-edit">Edit</button>
        <button className="btn btn-delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-review">Review</button>
      </div>
    </div>
  )
}

export default ReservationCard
