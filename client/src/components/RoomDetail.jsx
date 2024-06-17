import '../App.css'

const RoomDetail = (props) => {
  return (
    <div className="room-detail" id={props.id}>
      <img src={props.img} alt={props.name} />
      <h3>Room name: {props.name}</h3>
      <h4>Type: {props.type}</h4>
      <h5>Price: {props.price} BD</h5>
      <h5>Rating: {props.rating}/10 stars</h5>
      <h5>Review: {props.review}</h5>
      <h5>Facilities: {props.facilities.join(', ')}</h5>
    </div>
  )
}

export default RoomDetail
