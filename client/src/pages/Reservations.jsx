import React, { useEffect, useState } from 'react'
import '../App.css'
import ReservationCard from '../components/ReservationCard'
import axios from 'axios'

const Reservations = ({ user }) => {
  const [Reservations, setReservations] = useState([])
  const [ReservRooms, setReservRooms] = useState([])
  const [Rooms, setRooms] = useState([])

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/reservations`)
        setReservations(response.data)
      } catch (error) {
        console.error('Error Data Fetching:', error)
      }
    }

    const fetchRooms = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/rooms`)
        setRooms(response.data)
      } catch (error) {
        console.error('Error Data Fetching:', error)
      }
    }
    fetchRooms()
    fetchReservations()
  }, [])

  const currentUserReservations = Reservations.filter(
    (reservation) => reservation.user.toString() === user.id
  )

  console.log('user' + JSON.stringify(user, null, 1))
  console.log('reservation' + JSON.stringify(currentUserReservations, null, 2))
  console.log('ReservRooms' + JSON.stringify(ReservRooms, null, 2))
  return (
    <div>
      {currentUserReservations.length ? (
        <ReservationCard reservations={currentUserReservations} />
      ) : (
        <h3>No Reservations yet</h3>
      )}
    </div>
  )
}

export default Reservations
