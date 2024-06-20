import '../App.css'

const RoomCard = ({ room }) => {
  return (
    <div className="room-card " id={room.id}>
      <div className="img-wrapper">
        <img src={room.img} />
      </div>
      <div className="info-wrapper">
        <h3>{room.name}</h3>
        <h4>Type : {room.type}</h4>
        <h5>Price : {room.price} BD</h5>
      </div>
    </div>
  )
}

export default RoomCard
