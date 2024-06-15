import { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import HotelCard from '../components/HotelCard'
import { Link } from 'react-router-dom'
const Home = () => {
  const [hotels, sethotels] = useState([])

  useEffect(() => {
    const hotels = async () => {
      try {
        const response = await axios.get('http://localhost:3001/hotels')
        sethotels(response.data)
      } catch (error) {
        console.log('Error Connecting', error)
      }
    }

    hotels()
  }, [])

  return (
    <div className="Home-card">
      <h2>Hotels</h2>
      <div className="hotels">
        {hotels.map((hotel, index) => (
          <Link to={`/hotels/${hotel._id}/rooms`} key={index} className="link">
            <HotelCard
              id={index}
              img={hotel.img}
              name={hotel.name}
              location={hotel.location}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
