const mongoose = require('mongoose');

const DicCompetencyCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  isActive: { type: Boolean, default: true },
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'DicCompetencyCategory' },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('DicCompetencyCategory', DicCompetencyCategorySchema);