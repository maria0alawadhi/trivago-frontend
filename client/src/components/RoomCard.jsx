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
        <h5>Price : {props.price}</h5>
        <p>Rating : {props.rating} stars</p>
      </div>
    </div>
  )
}

export default RoomCard
