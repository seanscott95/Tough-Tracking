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

export const QUERY_WORKOUTS = gql`
  query getWorkouts {
    workouts {
      _id
      name
      exercises {
        name
        type
        weights
        sets
        reps
        distance
        time
        intensity
      }
      createdAt
    }
  }
`;