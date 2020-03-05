import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item.jsx';

const ReviewsList = ({reviewsQnt, reviews}) => {
  return <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsQnt}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, i) => <ReviewItem key={`key${i}`} name={review.name} avaPicName={review.avaPicName} rating={review.rating} text={review.text} date={review.date}/>)}
      </ul>
  </section>;
};

ReviewsList.propTypes = {
  reviewsQnt: PropTypes.number.isRequired,
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

