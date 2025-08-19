// components/ReviewForm.jsx
import React, { useState } from 'react';

const ReviewForm = () => {
  const [review, setReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit review logic would go here
    console.log('Review submitted:', review);
    alert('Thank you for your review!');
    setReview({
      name: '',
      rating: 5,
      comment: ''
    });
  };

  return (
    <div className="review-form-container">
      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={review.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={review.rating}
            onChange={handleChange}
          >
            {[5, 4, 3, 2, 1].map(num => (
              <option key={num} value={num}>{num} stars</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={review.comment}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>
        
        <button type="submit" className="submit-review-btn">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;