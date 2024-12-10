import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const FeedbackForm = () => {
  const [category, setCategory] = useState('Product Features');
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const user = JSON.parse(localStorage.getItem('user'));
    // if (!user) {
    //   alert('Please log in first!');
    //   return;
    // }

    const feedbackData = {
      category,
      rating,
      comments,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/v1/feedback/submit", feedbackData);
      console.log(res);
      alert('Feedback submitted successfully!');
      // navigate('/feedback-list');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Submit Feedback</h2>
      <form onSubmit={handleSubmit} className="shadow-sm p-4 rounded border">
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Product Features">Product Features</option>
            <option value="Product Pricing">Product Pricing</option>
            <option value="Product Usability">Product Usability</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input
            type="number"
            className="form-control"
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Comments</label>
          <textarea
            className="form-control"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
