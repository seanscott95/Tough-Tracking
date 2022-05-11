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

export const QUERY_SINGLE_WORKOUT = gql`
  query getSingleWorkout($workoutId: ID!) {
    workout(workoutId: $workoutId) {
      _id
      Name
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