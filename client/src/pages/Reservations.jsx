import React, { useEffect, useState } from 'react'
import '../App.css'
import ReservationCard from '../components/ReservationCard'
import axios from 'axios'

const Reservations = ({ user }) => {
  const [Reservations, setReservations] = useState([])

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/reservations`)
        setReservations(response.data)
      } catch (error) {
        console.error('Error Data Fetching:', error)
      }
    }
    fetchReservations()
  }, [])

  const currentUserReservations = Reservations.filter(
    (reservation) => reservation.user === user.id
  )

  return (
    <div>
      {currentUserReservations.length ? (
        <ReservationCard reservations={currentUserReservations} />
      ) : (
        <h3 className="unavailable">No Reservations yet</h3>
      )}
    </div>
  )
}

export default Reservations
