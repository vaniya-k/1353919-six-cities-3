import React from 'react';
import PropTypes from 'prop-types';

const dateStamp = (date) => {
  const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};


const ReviewItem = ({name, avaPicUrl, rating, text, date}) => {
  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={`${avaPicUrl}`} width="54" height="54" alt="Reviews avatar"></img>
      </div>
      <span className="reviews__user-name">{name}</span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${rating * 20}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">{text}</p>
      <time className="reviews__time" dateTime={date}>{`${dateStamp(date)}`}</time>
    </div>
  </li>;
};

const ReviewsList = ({reviews}) => {
  return <ul className="reviews__list">
    {reviews.map((review, i) => <ReviewItem key={`key${i}`} name={review.name} avaPicUrl={review.avaPicUrl} rating={review.rating} text={review.text} date={review.date}/>)}
  </ul>;
};

ReviewItem.propTypes = {
  name: PropTypes.string.isRequired,
  avaPicUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        avaPicUrl: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
      }).isRequired
  ).isRequired,
};

export default ReviewsList;
