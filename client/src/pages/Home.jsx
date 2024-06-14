import { useState,useEffect} from 'react'
import '../App.css'
import axios from 'axios'


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

  return (<div>
      {
        hotels.map((hotel,index)=>(
          <div className="small-card" key={index}>
            {hotel.name}
          </div>
        ))
      }
  </div>)
}

export default Home
