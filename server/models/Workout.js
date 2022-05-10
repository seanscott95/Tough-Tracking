const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  exercises: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Exercise',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
