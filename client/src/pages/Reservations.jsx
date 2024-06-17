import React, { useEffect, useState } from 'react'
import '../App.css'
import ReservationCard from '../components/ReservationCard'
import axios from 'axios'

const Reservations = ({ user }) => {
  const [userReservations, setUserReservations] = useState([])

  useEffect(() => {
    const fetchUserReservations = async () => {
      try {
        if (user) {
          const response = await axios.get(
            `http://localhost:3001/reservations?user=${user._id}`
          )
          setUserReservations(response.data)
        }
      } catch (error) {
        console.error('Error Data Fetching:', error)
      }
    }

    fetchUserReservations()
  }, [user])

  const currentUserReservation = userReservations.filter(
    (reservation) => reservation.user.toString() === user.id
  )

  console.log('user' + JSON.stringify(user))

  console.log('reservation' + JSON.stringify(userReservations))
  console.log(currentUserReservation)

  return (
    <div>
      {user ? (
        currentUserReservation.map((reservation) => (
          <ReservationCard key={reservation._id} reservations={reservation} />
        ))
      ) : (
        <h3>No Reservations yet</h3>
      )}
    </div>
  )
}

export default Reservations
