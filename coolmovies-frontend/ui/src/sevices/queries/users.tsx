import { gql } from '@apollo/client';

export const getUsersData = gql`
  query {
    allUsers {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`