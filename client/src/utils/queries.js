import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query myUser {
    myUser {
      _id
      username
      email
    }
  }
`;

export const QUERY_SINGLE_WORKOUT = gql`
  query getSingleWorkout($workoutId: ID!) {
    getSingleWorkout(workoutId: $workoutId) {
      _id
      name
      createdAt
      exercises {
        _id
        name
        type
        weight
        sets
        reps
        distance
        time
        intensity
      }
    }
  }
`;

export const QUERY_WORKOUTS = gql`
  query getWorkouts {
    getWorkouts {
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