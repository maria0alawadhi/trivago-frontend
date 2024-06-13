import { useState, useEffect } from 'react'
import axios from 'axios'

const HotelCard = () => {
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
    <div>
      {hotels.map((hotel, index) => (
        <div className="small-card" key={index}>
          {hotel.name}
          <img src={hotel.img} />
        </div>
      ))}
    </div>
  )
}

export default HotelCard
