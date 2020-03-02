import React from 'react';
import PropTypes from 'prop-types';

class ReviewItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.dateStamp = this.dateStamp.bind(this);
  }

  dateStamp = (date) => {
    const dateObj = new Date(`${date}`);

    const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

    return `${MONTHS[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
  };

  render() {
    const {name, avaPicName, rating, text, date} = this.props;

    return <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`img/${avaPicName}.jpg`} width="54" height="54" alt="Reviews avatar"></img>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date}>{`${this.dateStamp(date)}`}</time>
      </div>
    </li>;
  }
}

ReviewItem.propTypes = {
  name: PropTypes.string.isRequired,
  avaPicName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewItem;
