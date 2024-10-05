const mongoose = require('mongoose');

const LinkRatingToCategorySchema = new mongoose.Schema({
  ratingId: { type: mongoose.Schema.Types.ObjectId, ref: 'DicRating', required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'DicCompetencyCategory', required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('LinkRatingToCategory', LinkRatingToCategorySchema);