import { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import HotelCard from '../components/HotelCard'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../services/api'

const Home = () => {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/hotels`)
        setHotels(response.data)
      } catch (error) {
        console.log('Error Connecting', error)
      }
    }

    fetchHotels()
  }, [])

  return (
    <div className="Home-card">
      <h2>Hotels</h2>
      <div className="hotels">
        {hotels.map((hotel, index) => {
          let avgRating = 0
          hotel.rating.forEach((rate) => {
            avgRating += rate
          })
          avgRating = avgRating / hotel.rating.length

          return (
            <Link
              to={`/hotels/${hotel._id}/rooms`}
              key={index}
              className="link"
            >
              <HotelCard hotel={hotel} avgRating={avgRating} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home
