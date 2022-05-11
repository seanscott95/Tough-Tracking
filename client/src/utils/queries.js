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
        weight
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

export const QUERY_WORKOUTS_SUMMARY = gql`
  query getWorkouts {
    getWorkouts {
      _id
      name
      exercises
      createdAt
    }
  }
`;