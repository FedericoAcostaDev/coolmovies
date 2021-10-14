import { gql } from '@apollo/client';

export const getReviews = gql`
  query {
    allMovieReviews {
      edges {
        node {
          id
          body
          title
          rating
          userReviewerId
        }
      }
    }
  }
`

export const getMovieReviews = gql`
  query movieQuery($id: String!) {
    allMovieReviews(
      condition: {
        id: $id
      }
    ) {
      edges {
        node {
          body
          id
          rating
          title
          userReviewerId
          movieId
        }
      }
    }
  }
`