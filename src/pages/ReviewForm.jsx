import React, { useState } from 'react'
import { useParams } from 'react-router'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'
const ReviewForm = ({ user }) => {
  let navigate = useNavigate()
  const { roomid } = useParams()
  const [showModal, setShowModal] = useState(false)
  const userid = user.id
  const [review, setReview] = useState({
    review: '',
    rating: 0,
    user: userid,
    room: roomid
  })
  const closeModal = () => {
    setShowModal(false)
    navigate('/')
  }
  const handleChange = (event) => {
    setReview({ ...review, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await Client.post(`/reviews/${roomid}`, review)
      setReview({ review: '', rating: 0, user: user?.id, room: roomid })
      setShowModal(true)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="container4">
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="room" value={review.room} disabled />
        <input type="hidden" name="user" value={review.user} disabled />
        <label htmlFor="review">
          <h1>Review</h1>
        </label>
        <textarea name="review" value={review.review} onChange={handleChange} />
        <button type="submit">Submit Review</button>
      </form>
      {showModal && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal">
            <h3>Success</h3>
            <p>Reservation Reviewed successfully!</p>
            <button onClick={closeModal}>OK</button>
          </div>
        </>
      )}
    </div>
  )
}
export default ReviewForm
