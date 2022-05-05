const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
  exercise: {
    type: String,
    required: true,
    trim: true
  },
  weight: {
    type: Number,
    required: true,
    trim: true
  },
  sets: {
    type: Number,
    required: true,
    trim: true
  },
  reps: {
    type: Number,
    required: true,
    trim: true
  },
  distance: {
    type: Number,
    required: true,
    trim: true
  },
  time: {
    type: Number,
    required: true,
    trim: true
  },
  intensity: {
    type: String,
    required: true,
    trim: true
  },
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
