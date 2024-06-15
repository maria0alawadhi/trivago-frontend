import '../App.css'

const RoomCard = (props) => {
  return (
    <div className="room-card " id={props.id}>
      <div className="img-wrapper">
        <img src={props.img} />
      </div>
      <div className="info-wrapper">
        <h3>{props.name}</h3>
        <h4>Type : {props.type}</h4>
        <h5>Price : {props.price} BD</h5>
        <h5>Rating : {props.rating}/10 stars</h5>
      </div>
    </div>
  )
}

export default RoomCard
