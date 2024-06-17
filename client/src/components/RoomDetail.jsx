import '../App.css'

const RoomDetail = (props) => {
  return (
    <div className="room-detail" id={props.id}>
      <img src={props.img} alt={props.name} />
      <h3>Room name: {props.name}</h3>
      <h4>Type: {props.type}</h4>
      <h5>Price: {props.price} BD</h5>
      <h5>Rating: {props.rating}/10 stars</h5>
      <p>Review: {props.review}</p>
      <p>Facilities: {props.facilities.join(', ')}</p>
    </div>
  )
}

export default RoomDetail
