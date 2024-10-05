// routes/competencyRoutes.js
const express = require('express');
const router = express.Router();
const competencyController = require('../controllers/competencyController'); // Подключаем контроллер

// GET запрос для всех компетенций
router.get('/', competencyController.getAllCompetencies); // Используем метод из контроллера

module.exports = router;