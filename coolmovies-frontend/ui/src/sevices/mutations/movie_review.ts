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

export const updateMovieReview = gql`
  mutation updateMovieReview(
    $id: UUID!
    $body: String!
    $title: String!
    $rating: Int
  ) {
    updateMovieReview(
      input: {
        nodeId: $id,
        movieReviewPatch: {
          rating: $rating
          title: $title
          body: $body
        }
      }
    ) {
      clientMutationId
    }
  }
`