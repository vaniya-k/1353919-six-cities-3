import React from 'react';
import PropTypes from 'prop-types';
import {createAPI} from '../../api.js';
import history from '../../history.js';
import {connect} from "react-redux";
import {ApiManager as OffersApiManager, ActionCreator as OffersActionCreator} from "../../reducer/offers/offers.js";

const api = createAPI(() => {});

const ReviewInputParams = {
  MAX_LENGTH: 300,
  MIN_LENGTH: 50
};

class YourReview extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const {newPlaceLoaded, onYourReviewReload} = this.props;

    if (newPlaceLoaded) {
      onYourReviewReload();
    }
  }

  checkValidation = (rating, review) => {
    if ((review.length >= ReviewInputParams.MIN_LENGTH && review.length <= ReviewInputParams.MAX_LENGTH) && rating !== null) {
      return true;
    } else {
      return false;
    }
  };

  handleSumbit = (evt) => {
    evt.preventDefault();

    const params = {
      "comment": this.props.review,
      "rating": this.props.rating
    };

    this.props.onYourReviewReload();

    api.post(`/comments/${Number(history.location.pathname.slice(7))}/`, params)
      .then(() => {
        window.scrollTo(0, 0);
        this.props.getOffersNearby();
        this.props.setActivePlacePageId(Number(history.location.pathname.slice(7)));
        this.props.getCurrentReviews();
      });
  }

  render() {
    const {rating, review, onSetRating, onTypeReview} = this.props;

    return <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" checked={(rating === 5) ? true : false} id="5-stars" type="radio" onChange={onSetRating}></input>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked={(rating === 4) ? true : false} onChange={onSetRating}></input>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" checked={(rating === 3) ? true : false} onChange={onSetRating}></input>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" checked={(rating === 2) ? true : false} onChange={onSetRating}></input>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" checked={(rating === 1) ? true : false} onChange={onSetRating}></input>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={review} placeholder="Tell how was your stay, what you like and what can be improved" onChange={onTypeReview}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with <b className="reviews__text-amount">at least 50, but no more than 300 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={(this.checkValidation(rating, review)) ? false : true} onClick={this.handleSumbit}>Submit</button>
      </div>
    </form>;
  }
}

YourReview.propTypes = {
  getCurrentReviews: PropTypes.func.isRequired,
  getOffersNearby: PropTypes.func.isRequired,
  setActivePlacePageId: PropTypes.func.isRequired,
  newPlaceLoaded: PropTypes.bool.isRequired,
  rating: PropTypes.number,
  review: PropTypes.string,
  onSetRating: PropTypes.func.isRequired,
  onTypeReview: PropTypes.func.isRequired,
  onYourReviewReload: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  getCurrentReviews() {
    dispatch(OffersApiManager.getCurrentReviews());
  },
  getOffersNearby() {
    dispatch(OffersApiManager.getOffersNearby());
  },
  setActivePlacePageId(activePlacePageId) {
    dispatch(OffersActionCreator.setActivePlacePageId(activePlacePageId));
  },
});

export default connect(null, mapDispatchToProps)(YourReview);
