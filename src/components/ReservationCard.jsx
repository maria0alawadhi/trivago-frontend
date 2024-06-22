import '../App.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
const ReservationCard = ({ reservations, setUpdateRes }) => {
  let navigate = useNavigate()
  const [rooms, setRooms] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const closeModal = () => {
    setShowModal(false)
    navigate('/reservations')
  }
  const handleEdit = (reservation) => {
    const { checkIn, checkOut } = reservation
    navigate(
      `/Edit?checkIn=${encodeURIComponent(
        checkIn
      )}&checkOut=${encodeURIComponent(
        checkOut
      )}&reservationId=${encodeURIComponent(reservation._id)}`
    )
  }
  const handleDelete = async (reservationId) => {
    try {
      await Client.delete(`/reservations/${reservationId}`)
      setUpdateRes((prevData) => !prevData)
      setShowModal(true)
    } catch (error) {
      console.error('Error deleting a reservation', error)
    }
  }
  const handleReviewClick = (roomId) => {
    navigate(`/reviews/${roomId}`)
  }
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await Client.get(`/rooms`)
        setRooms(response.data)
      } catch (error) {
        console.log('Error Connecting', error)
      }
    }
    fetchRooms()
  }, [])
  return (
    <div className="cenr">
      <h1>My Reservations</h1>
      {reservations.map((reservation, index) => (
        <div className="reservation-card" key={index}>
          {rooms &&
            (rooms.find((room) => room._id === reservation.room) ? (
              <div className="reservation-content">
                <div className="reservation-img-container">
                  <img
                    className="reservation-img"
                    src={
                      rooms.find((room) => room._id === reservation.room).img
                    }
                    alt="room-img"
                  />
                </div>
                <div className="reservation-details">
                  <p>
                    <b>Room Name:</b>{' '}
                    {rooms.find((room) => room._id === reservation.room).name}
                  </p>
                  <p>
                    <b>Price:</b>{' '}
                    {rooms.find((room) => room._id === reservation.room).price}{' '}
                    BD
                  </p>
                  <p className="check-in">
                    <b>Check-In Date:</b> {reservation.checkIn.slice(0, 10)}
                  </p>
                  <p className="check-out">
                    <b>Check-Out Date:</b> {reservation.checkOut.slice(0, 10)}
                  </p>
                </div>
                <div className="reservation-buttons">
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(reservation)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(reservation._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn-review"
                    onClick={() => handleReviewClick(reservation.room)}
                  >
                    Review
                  </button>
                </div>
              </div>
            ) : (
              <p>Room details not found.</p>
            ))}
        </div>
      ))}
      {showModal && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal">
            <h3>Success</h3>
            <p>Reservation deleted successfully!</p>
            <button onClick={closeModal}>OK</button>
          </div>
        </>
      )}
    </div>
  )
}
export default ReservationCard
