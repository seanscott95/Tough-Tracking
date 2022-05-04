const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const sessionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  strength: {
    type: Schema.Types.ObjectId,
    ref: 'Strength',
  },
  cardio: {
    type: Schema.Types.ObjectId,
    ref: 'Cardio',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Session = model('Session', sessionSchema);

module.exports = Session;
