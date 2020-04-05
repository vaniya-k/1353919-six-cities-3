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
  constructor() {
    super();
    this.state = {
      rating: null,
      review: ``,
      validForSubmitting: false
    };
  }

  componentDidUpdate() {
    const {newPlaceLoaded} = this.props;

    if (newPlaceLoaded) {
      this.setState({
        rating: null,
        review: ``,
        validForSubmitting: false
      });
    }
  }

  validateSubmitting = () => {
    if (this.state.rating !== null && (this.state.review.length >= ReviewInputParams.MIN_LENGTH && this.state.review.length <= ReviewInputParams.MAX_LENGTH)) {
      this.setState({
        validForSubmitting: true
      });
    } else {
      this.setState({
        validForSubmitting: false
      });
    }
  }

  handleSetRating = (evt) => {
    this.setState({
      rating: Number(evt.target.value)
    });
    this.validateSubmitting();
  }

  handleTypeReview = (evt) => {
    if (this.state.review.length <= ReviewInputParams.MAX_LENGTH) {
      this.setState({
        review: evt.target.value
      });
      this.validateSubmitting();
    } else {
      this.setState({
        review: evt.target.value.slice(0, ReviewInputParams.MAX_LENGTH)
      });
      this.validateSubmitting();
    }
  }

  handleSumbit = (evt) => {
    evt.preventDefault();

    if (this.state.review.length >= ReviewInputParams.MIN_LENGTH && this.state.review.length <= ReviewInputParams.MAX_LENGTH) {
      const params = {
        "comment": this.state.review,
        "rating": this.state.rating
      };

      this.setState({
        rating: null,
        review: ``
      });

      api.post(`/comments/${Number(history.location.pathname.slice(7))}/`, params)
        .then(() => {
          window.scrollTo(0, 0);
          this.props.getOffersNearby();
          this.props.setActivePlacePageId(Number(history.location.pathname.slice(7)));
          this.props.getCurrentReviews();
        });
    }
  }

  render() {
    return <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" checked={(this.state.rating === 5) ? true : false} id="5-stars" type="radio" onChange={this.handleSetRating}></input>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked={(this.state.rating === 4) ? true : false} onChange={this.handleSetRating}></input>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" checked={(this.state.rating === 3) ? true : false} onChange={this.handleSetRating}></input>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" checked={(this.state.rating === 2) ? true : false} onChange={this.handleSetRating}></input>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" checked={(this.state.rating === 1) ? true : false} onChange={this.handleSetRating}></input>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={this.state.review} placeholder="Tell how was your stay, what you like and what can be improved" onChange={this.handleTypeReview}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with <b className="reviews__text-amount">at least 50, but no more than 300 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={(this.state.validForSubmitting === true) ? false : true} onClick={this.handleSumbit}>Submit</button>
      </div>
    </form>;
  }
}

YourReview.propTypes = {
  getCurrentReviews: PropTypes.func.isRequired,
  getOffersNearby: PropTypes.func.isRequired,
  setActivePlacePageId: PropTypes.func.isRequired,
  newPlaceLoaded: PropTypes.bool.isRequired
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
