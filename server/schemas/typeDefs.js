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

    type Workout {
        _id: ID
        name: String
        user: ID
        exercises: [Exercise]
        createdAt: String
    }

    input PostWorkout {
        _id: ID
        name: String
        user: ID
        exercises: [PostExercise]
        createdAt: String
    }

    type CreatedWorkout {
        _id: ID
        name: String
        user: ID
        exercises: [ID]
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        myUser: User
        getSingleWorkout(workoutId: ID!): Workout
        getWorkouts: [Workout]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createWorkout(exercises: [PostExercise], name: String): CreatedWorkout
        editWorkout(data: PostWorkout): CreatedWorkout
        deleteWorkout(workoutId: ID!): Workout
    }
`;

module.exports = typeDefs;