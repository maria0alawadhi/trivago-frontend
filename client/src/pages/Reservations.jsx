import React, { useEffect, useState } from 'react'
import '../App.css'
import ReservationCard from '../components/ReservationCard'
import Client from '../services/api'

const Reservations = ({ user }) => {
  const [Reservations, setReservations] = useState([])
  const [updateRes, setUpdateRes] = useState(false)
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await Client.get(`/reservations`)
        setReservations(response.data)
      } catch (error) {
        console.error('Error Data Fetching:', error)
      }
    }
    fetchReservations()
  }, [updateRes])

  const currentUserReservations = Reservations.filter(
    (reservation) => reservation.user === user.id
  )

  return (
    <div>
      {currentUserReservations.length ? (
        <ReservationCard
          reservations={currentUserReservations}
          setUpdateRes={setUpdateRes}
        />
      ) : (
        <h3 className="unavailable">No Reservations yet</h3>
      )}
    </div>
  )
}

export default Reservations
