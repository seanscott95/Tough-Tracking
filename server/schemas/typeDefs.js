const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }
    
    type Exercise {
        _id: ID
        name: String
        type: String
        weight: Float
        sets: Int
        reps: Int
        distance: Float
        time: Float
        intensity: String
    }

    input PostExercise {
        name: String
        type: String
        weight: Float
        sets: Int
        reps: Int
        distance: Float
        time: Float
        intensity: String
    }

    type Workout {
        _id: ID
        name: String
        user: User
        exercises: [Exercise]
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        myUser: User
        getWorkout(workoutId: ID!): Workout
        getWorkouts: [Workout]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createWorkout(exercises: [PostExercise], name: String): Workout
        removeWorkout(workoutId: ID!): Workout
    }
`;

module.exports = typeDefs;