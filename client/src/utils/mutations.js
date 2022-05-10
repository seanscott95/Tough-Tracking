import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation addWorkout($exercises: String!) {
    addWorkout(exercises: $exercises) {
      _id
      user
      exercises
      createdAt
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation addExercise(
      $name: String!,
      $type: String!,
      $weight: Number,
      $sets: Number, 
      $reps: Number,
      $distance: Number,
      $time: Number,
      $intensity: String) {
    addExercise(
      name: $name,
      type: $type,
      weight: $weight,
      sets: $sets,
      reps: $reps,
      distance: $distance,
      intensity: $intensity) {
        _id
    }
  }
`;