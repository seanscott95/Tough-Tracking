const { Schema } = require('mongoose');

const strengthSchema = new Schema({
  activity: {
    type: String,
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

const Strength = mongoose.model('Strength', strengthSchema);

module.exports = Strength;
