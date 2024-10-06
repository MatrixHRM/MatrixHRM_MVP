const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const LinkRatingToCategorySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => uuidv4(), // Генерация UUID
  },
  ratingId: { type: String, ref: 'DicRating', required: true }, // Изменено на String для использования UUID
  categoryId: { type: String, ref: 'DicCompetencyCategory', required: true }, // Изменено на String для использования UUID
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('LinkRatingToCategory', LinkRatingToCategorySchema);
