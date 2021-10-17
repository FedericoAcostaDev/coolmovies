import React from 'react';
import BgImg from '../../images/popcorn.jpg';

import Box from '../../components/box';
import ReviewList from '../../containers/review_list';

import { getReviews } from '../../sevices/queries/movie_reviews';

const Reviews: React.FC = () => {
  return (
    <Box backgroundImage={BgImg}>
      <ReviewList gqlQuery={getReviews} />
    </Box>
  )
}

export default Reviews;