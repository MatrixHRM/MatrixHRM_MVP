const mongoose = require('mongoose');

const LinkCompetencyToCategorySchema = new mongoose.Schema({
  competencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'DicCompetency', required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'DicCompetencyCategory', required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('LinkCompetencyToCategory', LinkCompetencyToCategorySchema);