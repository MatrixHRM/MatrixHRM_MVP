const mongoose = require('mongoose');

const LinkCategoryToParentSchema = new mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'DicCompetencyCategory', required: true },
  parentCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'DicCompetencyCategory', required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('LinkCategoryToParent', LinkCategoryToParentSchema);