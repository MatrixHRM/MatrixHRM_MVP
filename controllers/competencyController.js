// controllers/competencyController.js
const DicCompetency = require('../models/DicCompetency');

// Получение всех компетенций
const getAllCompetencies = async (req, res) => {
    try {
        const competencies = await DicCompetency.find(); // Запрос всех компетенций
        res.json(competencies); // Возврат данных в JSON формате
    } catch (err) {
        res.status(500).json({ message: err.message }); // Обработка ошибок
    }
};

module.exports = {
    getAllCompetencies,
};