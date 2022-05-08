import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query myUser {
    user {
      _id
      username
      email
    }
  }
`;
