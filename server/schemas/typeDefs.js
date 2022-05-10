const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }
    
    type Exercise {
        _id: ID
        name: String!
        type: String!
        exercise: String!
        weight: Float
        sets: Int
        reps: Int
        distance: Float
        time: Float
        intensity: String
    }

    type Workout {
        _id: ID
        user: User
        exercise: [Exercise]!
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        myUser: User
        workouts: [Workout]
        workout(workoutId: ID!): Workout
        exercises: [Exercise]
        exercise(exerciseId: ID!): Exercise
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addWorkout(exercise: String!): Workout
        addExercise(
            workoutId: ID!
            name: String!
            type: String!
            weight: Float
            sets: Int
            reps: Int
            distance: Float
            time: Float
            intensity: String
        ): Workout
        removeWorkout(workoutId: ID!): Workout
        removeExercise(workoutId: ID!, exerciseId: ID!): Workout
    }
`;

module.exports = typeDefs;