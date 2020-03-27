import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item.jsx';

const ReviewsList = ({reviews}) => {
  return <ul className="reviews__list">
      {reviews.map((review, i) => <ReviewItem key={`key${i}`} name={review.name} avaPicName={review.avaPicName} rating={review.rating} text={review.text} date={review.date}/>)}
  </ul>;
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        avaPicName: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired
};

export default ReviewsList;

