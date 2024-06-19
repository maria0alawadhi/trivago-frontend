import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ReviewForm = ({user}) => {
const { roomid } = useParams();
const userid=user.id
  const [review, setReview] = useState({
    review: '',
    rating: 0,
    user:userid,
    room:roomid
  })

  const handleChange = (event) => {
    setReview({ ...review, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post(
        `http://localhost:3001/reviews/${roomid}`,
        review
      )
      console.log(response.data)
      setReview({ review: '', rating: 0, user: user?.id, room: roomid })
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="room">RoomId "for reference only":</label>
        <input type="text" name="room" value={review.room} disabled />
        <label htmlFor="user">UserId "for reference only":</label>
        <input type="text" name="user" value={review.user}disabled />
        <label htmlFor="review">Review:</label>
        <textarea name="review" value={review.review} onChange={handleChange} />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          value={review.rating}
          onChange={handleChange}
        />
        <button type="submit">Submit Review</button>
      </form>
   
      
    </div>
  )
}

export default ReviewForm
