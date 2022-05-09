const { Workout, Exercise, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        myUser: async () => {
            return User.find();
        },
        workouts: async () => {
            return Workout.find();
        },
        workout: async (parent, { workoutId }) => {
            return Workout.findOne({ _id: workoutId });
        },
        exercises: async () => {
            return Exercise.find();
        },
        exercise: async (parent, { exerciseId }) => {
            return Exercise.findOne({ _id: exerciseId });
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
        addWorkout: async (parent, { name }) => {
            return Workout.create({ name });
        },
        addExercise: async (parent, { workoutId, name, type, weight, sets, reps, distance, time, intensity }) => {
            return Workout.findOneAndUpdate(
                { _id: workoutId },
                {
                    $addToSet: { exercise: { name, type, weight, sets, reps, distance, time, intensity } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeWorkout: async (parent, { workoutId }) => {
            return Workout.findOneAndDelete({ _id: workoutId });
        },
        removeExercise: async (parent, { workoutId, exerciseId }) => {
            return Workout.findOneAndUpdate(
                { _id: workoutId },
                { $pull: { exercise: { _id: exerciseId } } },
                { new: true }
            );
        },
    },
};

module.exports = resolvers;
