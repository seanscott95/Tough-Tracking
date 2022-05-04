const { Schema } = require('mongoose');

const strengthSchema = new Schema({
  activity: {
    type: String,
    required: true,
    trim: true
  },
  weight: {
    type: String,
    required: true,
    trim: true
  },
  sets: {
    type: String,
    required: true,
    trim: true
  },
  reps: {
    type: String,
    required: true,
    trim: true
  },
});

const Strength = mongoose.model('Strength', strengthSchema);

module.exports = Strength;
