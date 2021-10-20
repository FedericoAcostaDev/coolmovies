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
  query ($id: UUID!) {
    allMovieReviews(
      condition: {
        movieId: $id
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
  query ($id: UUID!) {
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

export const getReviewById = gql`
  query ($id: UUID!) {
    movieReviewById(id: $id) {
      title
      movieId
      rating
      body
    }
  }
`