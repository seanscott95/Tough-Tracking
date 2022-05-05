const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        sessions: [Session]!
    }
    
    type Exercise {
        _id: ID
        exercise: String!
        weight: Number
        sets: Number
        reps: Number
        distance: Number
        time: Number
        intensity: String
    }

    type Session {
        _id: _id
        name: String
        exercise: [Exercise]!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        exercises: [Exercise]!
        exercise(exerciseId: ID!): Exercise
        session(sessionId: ID!): Session
        sessions: [Session]!
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addSession(name: String!): Session
        addExercise(
            sessionId: ID!
            exercise: String!
            weight: Number
            sets: Number
            reps: Number
            distance: Number
            time: Number
            intensity: String
        ): Session
        removeSession(sessionId: ID!): Session
        removeExercise(sessionId: ID!, exerciseId: ID!): Session
    }
`;

module.exports = typeDefs;