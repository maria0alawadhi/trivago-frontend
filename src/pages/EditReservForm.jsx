import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Client from '../services/api'
const EditReservForm = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const oldCheckIn = queryParams.get('checkIn')
  const oldCheckOut = queryParams.get('checkOut')
  const reservationId = queryParams.get('reservationId')
  const [newCheckIn, setNewCheckIn] = useState('')
  const [newCheckOut, setNewCheckOut] = useState('')
  const [confirmEdit, setConfirmEdit] = useState(false)

  const handleConfirm = () => {
    setConfirmEdit(true)
  }

  const handleUpdate = async () => {
    try {
      console.log('Sending data:', {
        oldCheckIn,
        oldCheckOut,
        newCheckIn,
        newCheckOut
      })

      const response = await Client.put(`/reservations/${reservationId}`, {
        oldCheckIn,
        oldCheckOut,
        newCheckIn,
        newCheckOut
      })

      navigate('/')
    } catch (error) {
      console.error(
        'Error updating reservation:',
        error.response ? error.response.data : error.message
      )
    }
  }

  return (
    <div className="container">
      <h2>Edit Reservation</h2>

      <p className="edit-bold">
        Old Check-In Date: {new Date(oldCheckIn).toLocaleString()}
      </p>
      <p className="edit-bold">
        Old Check-Out Date: {new Date(oldCheckOut).toLocaleString()}
      </p>
      {confirmEdit ? (
        <>
          <div>
            <p className="edit-bold">
              <label>New Check-In Date and Time:</label>
              <input
                type="datetime-local"
                value={newCheckIn}
                onChange={(e) => setNewCheckIn(e.target.value)}
              />
            </p>
          </div>
          <div>
            <p className="edit-bold">
              <label>New Check-Out Date and Time:</label>
              <input
                type="datetime-local"
                value={newCheckOut}
                onChange={(e) => setNewCheckOut(e.target.value)}
              />
            </p>
          </div>

          <button onClick={handleUpdate}>Update Reservation</button>
        </>
      ) : (
        <>
          <p>Are you sure you want to change the reservation dates?</p>
          <button className="yes" onClick={handleConfirm}>
            Yes
          </button>
          <button className="no" onClick={() => navigate(-1)}>
            No
          </button>
        </>
      )}
    </div>
  )
}

export default EditReservForm