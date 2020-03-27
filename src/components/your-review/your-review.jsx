import React from 'react';
// import PropTypes from 'prop-types';

class YourReview extends React.PureComponent {
  constructor(props) {
    super(props),
    this.state = {
      rating: null,
      review: ``
    }
  }

  handleSetRating = (e) => {
    this.setState({
      rating: Number(e.target.value)
    });
  }

  handleTypeReview = (e) => {
    if(this.state.review.length < 300) {
      this.setState({
        review: e.target.value
      });
    } else {
      this.setState({
        review: e.target.value.slice(0,-1)
      });
    }
  }

  handleSumbit = (e) => {
    e.preventDefault();

    if(this.state.review.length > 49) {
      this.setState({
      rating: null,
      review: ``
      })
    };
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
      <button className="reviews__submit form__submit button" type="submit" disabled="" onClick={this.handleSumbit}>Submit</button>
    </div>
  </form>
  }
}

export default YourReview;
