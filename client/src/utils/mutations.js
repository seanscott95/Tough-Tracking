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

export const CREATE_WORKOUT = gql`
  mutation createWorkout($name: String!, $exercises: String!) {
    createWorkout(name: $name, exercises: $exercises) {
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