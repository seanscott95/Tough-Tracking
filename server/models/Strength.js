const { Schema } = require('mongoose');

const strengthSchema = new Schema({
  activity: {
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
});

const Strength = mongoose.model('Strength', strengthSchema);

module.exports = Strength;
