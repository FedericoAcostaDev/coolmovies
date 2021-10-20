import { gql } from '@apollo/client';

export const setMovieReview = gql`
  mutation createMovieReview(
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
    updateMovieReviewById(
      input: {
        movieReviewPatch: {
          body: $body
          rating: $rating
          title: $title
        },
        id: $id
      }
    ) {
      clientMutationId
    }
  }
`