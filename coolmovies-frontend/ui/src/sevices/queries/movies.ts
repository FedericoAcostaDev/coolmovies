import { gql } from '@apollo/client';

export const listMovies = gql`
  query {
    allMovies {
      edges {
        node {
          id
          title
          releaseDate
          movieDirectorByMovieDirectorId {
            name
          }
          movieReviewsByMovieId {
            totalCount
          }
        }
      }
    }
  }
`