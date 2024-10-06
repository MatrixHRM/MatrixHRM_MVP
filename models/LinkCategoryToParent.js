const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const LinkCategoryToParentSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => uuidv4(), // Генерация UUID
  },
  categoryId: { type: String, ref: 'DicCompetencyCategory', required: true }, // Изменено на String для использования UUID
  parentCategoryId: { type: String, ref: 'DicCompetencyCategory', required: true }, // Изменено на String для использования UUID
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('LinkCategoryToParent', LinkCategoryToParentSchema);