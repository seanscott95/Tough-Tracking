const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const sessionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  exercise: [
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

const Session = model('Session', sessionSchema);

module.exports = Session;
