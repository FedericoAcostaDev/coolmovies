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
`;

export const getCurrentUserData = gql`
  query {
    currentUser {
      name
      id
    }
  }
`;