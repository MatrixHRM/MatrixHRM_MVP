const DicCompetency = require('../models/DicCompetency');
const DicCompetencyCategory = require('../models/DicCompetencyCategory');
const LinkCompetencyToCategory = require('../models/LinkCompetencyToCategory');
const LinkCategoryToParent = require('../models/LinkCategoryToParent');
const { v4: uuidv4 } = require('uuid');

// POST method for uploading data
const uploadCompetencies = async (req, res) => {
    try {
        const { categories } = req.body;

        for (let category of categories) {
            const categoryId = uuidv4();
            const newCategory = new DicCompetencyCategory({
                _id: categoryId,
                name: category.name
            });
            await newCategory.save();

            if (category.subcategories) {
                for (let subcategory of category.subcategories) {
                    const subcategoryId = uuidv4();
                    const newSubcategory = new DicCompetencyCategory({
                        _id: subcategoryId,
                        name: subcategory.name
                    });
                    await newSubcategory.save();

                    const linkCategory = new LinkCategoryToParent({
                        categoryId: subcategoryId,
                        parentCategoryId: categoryId
                    });
                    await linkCategory.save();

                    if (subcategory.competencies) {
                        for (let competency of subcategory.competencies) {
                            const competencyId = uuidv4();
                            const newCompetency = new DicCompetency({
                                _id: competencyId,
                                name: competency.name,
                                description: competency.description
                            });
                            await newCompetency.save();

                            const linkCompetency = new LinkCompetencyToCategory({
                                competencyId: competencyId,
                                categoryId: subcategoryId
                            });
                            await linkCompetency.save();
                        }
                    }
                }
            }
        }

        res.status(200).json({ message: 'Data uploaded successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error uploading data', error: err });
    }
};

// Получение всех компетенций
const getAllCompetencies = async (req, res) => {
    try {
        const competencies = await DicCompetency.find(); // Запрос всех компетенций
        res.json(competencies); // Возврат данных в JSON формате
    } catch (err) {
        res.status(500).json({ message: err.message }); // Обработка ошибок
    }
};

// Экспортируем функции
module.exports = {
    getAllCompetencies,
    uploadCompetencies // экспорт новой функции
};