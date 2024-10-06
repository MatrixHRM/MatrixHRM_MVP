const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const DicRatingSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => uuidv4(), // Генерация UUID
  },
  name: { type: String, required: true },
  score: { type: Number, required: true },
  description: { type: String },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('DicRating', DicRatingSchema);