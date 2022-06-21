const { Workout, Exercise, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        myUser: async () => {
            return User.findOne();
        },
        getSingleWorkout: async (parent, args) => {
            return Workout.findById(args.workoutId).populate('exercises');
        },
        getWorkouts: async (parent, args, context) => {
            return Workout.find({ user: context.user._id }).populate('exercises')
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
        createWorkout: async (parent, args, context) => {
            const exerciseList = await Exercise.insertMany(args.exercises);
            return Workout.create({
                name: args.name,
                user: context.user._id,
                exercises: exerciseList.map((e) => e._id)
            });
        },
        editWorkout: async (parent, args) => {

            const exercisesToUpdate = args.data.exercises.map(async (e) => {
                return Exercise.findOneAndUpdate({ _id: e._id }, { $set: { ...e } });
            });
            await Promise.all(exercisesToUpdate);
            return Workout.findOneAndUpdate(
                { _id: args.data._id },
                { $set: { name: args.data.name } },
                { new: true }
            )
        },
        deleteWorkout: async (parent, args) => {
            return Workout.findOneAndDelete({ _id: args.workoutId });
        },
    },
};

module.exports = resolvers;
