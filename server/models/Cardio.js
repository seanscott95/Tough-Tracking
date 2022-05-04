const { Schema } = require('mongoose');

const cardioSchema = new Schema({
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

const Cardio = mongoose.model('Cardio', cardioSchema);

module.exports = Cardio;
