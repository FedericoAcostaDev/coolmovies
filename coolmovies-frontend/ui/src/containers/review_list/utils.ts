import { ReviewListParam } from './types';

export const parseReviewList: Function = (params: ReviewListParam) => {
  const reviewsArray = params.allMovieReviews.edges;

  return reviewsArray.map(({ node }) => node)
}