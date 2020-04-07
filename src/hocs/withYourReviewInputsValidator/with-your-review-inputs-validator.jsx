import React from 'react';
import YourReview from '../../components/your-review/your-review.jsx';

const ReviewInputParams = {
  MAX_LENGTH: 300,
  MIN_LENGTH: 50
};

const withYourReviewInputsValidator = (Component) => {
  class YourReviewInputsValidator extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        review: ``
      };

      this.handleSetRating = this.handleSetRating.bind(this);
      this.handleTypeReview = this.handleTypeReview.bind(this);
      this.handleYourReviewReload = this.handleYourReviewReload.bind(this);
    }

    handleSetRating(evt) {
      this.setState({
        rating: Number(evt.target.value)
      });
    }

    handleTypeReview(evt) {
      if (this.state.review.length <= ReviewInputParams.MAX_LENGTH) {
        this.setState({
          review: evt.target.value
        });
      } else {
        this.setState({
          review: evt.target.value.slice(0, ReviewInputParams.MAX_LENGTH)
        });
      }
    }

    handleYourReviewReload() {
      this.setState({
        rating: null,
        review: ``
      });
    }

    render() {
      return <Component {...this.props} rating={this.state.rating} review={this.state.review} onSetRating={this.handleSetRating} onTypeReview={this.handleTypeReview} onYourReviewReload={this.handleYourReviewReload}/>;
    }
  }

  return YourReviewInputsValidator;
};

export default withYourReviewInputsValidator(YourReview);
