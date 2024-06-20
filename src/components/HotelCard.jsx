import '../App.css'

const HotelCard = ({ hotel, avgRating }) => {
  return (
    <div className="hotel-card " id={hotel.id}>
      <div className="img-wrapper">
        <img src={hotel.img} />
      </div>
      <div className="info-wrapper">
        <h3>{hotel.name}</h3>
        <h5>Rating : {avgRating.toFixed(1)} stars</h5>
        <p>{hotel.location}</p>
      </div>
    </div>
  )
}

export default HotelCard
