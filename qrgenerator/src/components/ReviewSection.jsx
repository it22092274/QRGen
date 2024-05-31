import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/ReviewSection.css';

const ReviewSection = ({ onAddReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rating === 0 || comment.trim() === '') {
      alert('Please provide a rating and comment.');
      return;
    }
    const newReview = {
      rating: rating,
      comment: comment.trim(),
    };
    onAddReview(newReview);
    setRating(0);
    setComment('');
  };

  return (
    <form className="add-review-form" onSubmit={handleSubmit}>
      <h2>Add Your Review</h2>
      <div className="rating-stars">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleRatingChange(ratingValue)}
              />
              <FaStar
                className={ratingValue <= rating ? 'star-filled' : 'star-outline'}
              />
            </label>
          );
        })}
      </div>
      <textarea
        className="comment-input"
        placeholder="Write your review here..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewSection;
