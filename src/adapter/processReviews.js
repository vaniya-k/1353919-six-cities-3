const processReviews = (apiReturn) => {
  const reviews = apiReturn;
  const currentReviews = [];

  const buildReviewObj = (review) => {
    return {
      name: review.user.name,
      avaPicUrl: `${review.user.avatar_url}`,
      text: review.comment,
      date: new Date(review.date),
      rating: review.rating
    };
  };

  reviews.map((review) => currentReviews.push(buildReviewObj(review)));

  return currentReviews;
};

export default processReviews;
