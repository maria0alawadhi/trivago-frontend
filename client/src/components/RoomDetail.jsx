import '../App.css'

const RoomDetail = ({ room, handleSubmit }) => {
  return (
    <div className="room-detail" id={room.id}>
      <img src={room.img} alt={room.name} />
      <h3>Room name: {room.name}</h3>
      <h4>Type: {room.type}</h4>
      <h5>Price: {room.price} BD</h5>
      <h5>Review: {room.review}</h5>
      <h5>Facilities: {room.facilities.join(', ')}</h5>


      <form onSubmit={handleSubmit}
      
      >
        <input type="date"
       
        ></input>
        <input type="date"
        
        ></input>
        <button> confirm</button>
      </form>


    </div>
  )
}

export default RoomDetail
