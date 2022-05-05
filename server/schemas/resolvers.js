const { Session, Exercise, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('sessions');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('sessions');
        },
        exercises: async () => {
            return Exercise.find();
        },
        exercise: async (parent, { exerciseId }) => {
            return Exercise.findOne({ _id: exerciseId });
        },
        sessions: async () => {
            return Session.find();
        },
        session: async (parent, { sessionId }) => {
            return Session.findOne({ _id: sessionId });
        },
    },
};

module.exports = resolvers;
