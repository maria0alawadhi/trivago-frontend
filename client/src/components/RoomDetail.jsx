import '../App.css'

const RoomDetail = ({ room, avgRating }) => {
  return (
    <div className="room-detail" id={room.id}>
      <img src={room.img} alt={room.name} />
      <h3>Room name: {room.name}</h3>
      <h4>Type: {room.type}</h4>
      <h5>Price: {room.price} BD</h5>
      <h5>Rating: {avgRating.toFixed(1)} stars</h5>
      <h5>Review: {room.review}</h5>
      <h5>Facilities: {room.facilities.join(', ')}</h5>
    </div>
  )
}

export default RoomDetail
