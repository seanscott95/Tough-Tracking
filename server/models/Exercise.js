const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  weight: {
    type: Number,
    trim: true
  },
  sets: {
    type: Number,
    trim: true
  },
  reps: {
    type: Number,
    trim: true
  },
  distance: {
    type: Number,
    trim: true
  },
  time: {
    type: Number,
    trim: true
  },
  intensity: {
    type: String,
    trim: true
  },
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
