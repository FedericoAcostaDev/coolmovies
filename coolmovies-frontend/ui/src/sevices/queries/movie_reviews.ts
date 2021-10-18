import { gql } from '@apollo/client';

export const getReviews = gql`
  query {
    allMovieReviews {
      edges {
        node {
          body
          id
          rating
          title
          userReviewerId
          movieId
          movieByMovieId {
            title
          }
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
          movieByMovieId {
            title
          }
        }
      }
    }
  }
`
export const getMovieReviewsByUser = gql`
  query movieByUserQuery($id: UUID) {
    allMovieReviews(condition: {
      userReviewerId: $id
    }) {
      edges {
        node {
          body
          id
          rating
          title
          userReviewerId
          movieId
          movieByMovieId {
            title
          }
        }
      }
    }
  }
`