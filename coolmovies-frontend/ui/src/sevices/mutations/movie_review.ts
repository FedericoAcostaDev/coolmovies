import { gql } from '@apollo/client';

export const setMovieReview = gql`
  mutation movieReview(
    $title: String!
    $movieId: UUID!
    $userReviewerId: UUID!
    $body: String!
    $rating: Int
  ) {
    createMovieReview(
      input: {
        movieReview: {
          title: $title
          movieId: $movieId 
          userReviewerId: $userReviewerId
          body: $body,
          rating: $rating
        }
      }
    ) {
      clientMutationId
    }
  }
`