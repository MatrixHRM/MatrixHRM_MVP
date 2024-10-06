const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const DicCompetencyCategorySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => uuidv4(), // Генерация UUID
  },
  name: { type: String, required: true },
  description: { type: String },
  isActive: { type: Boolean, default: true },
  parentCategory: { type: String, ref: 'DicCompetencyCategory' }, // Обновлено на String для UUID
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('DicCompetencyCategory', DicCompetencyCategorySchema);