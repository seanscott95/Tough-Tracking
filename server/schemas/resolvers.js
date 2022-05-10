const { Workout, Exercise, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        myUser: async () => {
            return User.find();
        },
        getWorkout: async (parent, args) => {
            return Workout.findById(args.workoutId).populate('exercises');
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
        createWorkout: async (parent, args ) => {
            const exerciseList = await Exercise.insertMany(args.exercises);
            console.log(exerciseList);
            return Workout.create({
                name: args.name,
                exercises: exerciseList.map((e) => e._id)
            });
        },
        removeWorkout: async (parent, { workoutId }) => {
            return Workout.findOneAndDelete({ _id: workoutId });
        },
    },
};

module.exports = resolvers;
