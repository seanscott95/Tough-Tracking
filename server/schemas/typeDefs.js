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

    type Session {
        _id: ID
        name: String
        exercise: [Exercise]!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        myUser: User
        sessions: [Session]
        session(sessionId: ID!): Session
        exercises: [Exercise]
        exercise(exerciseId: ID!): Exercise
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addSession(name: String!): Session
        addExercise(
            sessionId: ID!
            name: String!
            type: String!
            weight: Float
            sets: Int
            reps: Int
            distance: Float
            time: Float
            intensity: String
        ): Session
        removeSession(sessionId: ID!): Session
        removeExercise(sessionId: ID!, exerciseId: ID!): Session
    }
`;

module.exports = typeDefs;