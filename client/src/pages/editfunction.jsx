import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const DateForm = () => {
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

      console.log(`reservation id ${reservationId}`)

      const response = await axios.put(
        `${BASE_URL}/reservations/${reservationId}`,
        { oldCheckIn, oldCheckOut, newCheckIn, newCheckOut }
      )

      alert('Reservation updated successfully!')

      navigate('/')
    } catch (error) {
      //  فشل التحديث
      console.error(
        'Error updating reservation:',
        error.response ? error.response.data : error.message
      )

      if (error.response && error.response.status === 409) {
        alert(
          'Error updating reservation: There is a conflict with another reservation.'
        )
      } else {
        alert('Error updating reservation')
      }
    }
  }

  return (
    <div>
      <h2>Edit Reservation</h2>
      {/* عرض التواريخ القديمة للحجز */}
      <p>Old Check-In Date: {new Date(oldCheckIn).toLocaleString()}</p>
      <p>Old Check-Out Date: {new Date(oldCheckOut).toLocaleString()}</p>
      {confirmEdit ? (
        <>
          {/* إدخال التواريخ الجديدة */}
          <div>
            <label>New Check-In Date and Time:</label>
            <input
              type="datetime-local"
              value={newCheckIn}
              onChange={(e) => setNewCheckIn(e.target.value)}
            />
          </div>
          <div>
            <label>New Check-Out Date and Time:</label>
            <input
              type="datetime-local"
              value={newCheckOut}
              onChange={(e) => setNewCheckOut(e.target.value)}
            />
          </div>
          {/* زر لتحديث الحجز */}
          <button onClick={handleUpdate}>Update Reservation</button>
        </>
      ) : (
        <>
          {/* تأكيد التعديل */}
          <p>Are you sure you want to change the reservation dates?</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={() => navigate(-1)}>No</button>
        </>
      )}
    </div>
  )
}

export default DateForm
