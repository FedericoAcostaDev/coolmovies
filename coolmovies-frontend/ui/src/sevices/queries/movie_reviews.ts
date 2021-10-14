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
        }
      }
    }
  }
`