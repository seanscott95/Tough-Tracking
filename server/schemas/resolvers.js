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

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }
            
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            
            const token = signToken(user);
            return { token, user };
        },
        addSession: async (parent, { name }) => {
            return Session.create({ name });
        },
        addExercise: async (parent, { sessionId, exercise, weight, sets, reps, distance, time, intensity }) => {
            return Session.findOneAndUpdate(
                { _id: sessionId },
                {
                    $addToSet: { exercise: { exercise, weight, sets, reps, distance, time, intensity } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeSession: async (parent, { sessionId }) => {
            return Session.findOneAndDelete({ _id: sessionId });
        },
        removeExercise: async (parent, { sessionId, exerciseId }) => {
            return Session.findOneAndUpdate(
                { _id: sessionId },
                { $pull: { exercise: { _id: exerciseId } } },
                { new: true }
            );
        },
    },
};

module.exports = resolvers;
