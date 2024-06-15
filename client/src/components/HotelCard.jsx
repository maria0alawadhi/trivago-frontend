const HotelCard = (props) => {
  return (
    <div className="hotel-card " id={props.id}>
      <div className="img-wrapper">
        <img src={props.img} />
      </div>
      <div className="info-wrapper">
        <h3>{props.name}</h3>
        <p>{props.location}</p>
      </div>
    </div>
  )
}

export default HotelCard
