const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected!'))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello, MatrixHRM!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
=======
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Импорт роутов для компетенций и категорий
const competencyRoutes = require('./routes/competencyRoutes');
// const categoryRoutes = require('./routes/categoryRoutes');

// Подключение роутов
app.use('/api/competencies', competencyRoutes); // Пути для работы с компетенциями
// app.use('/categories', categoryRoutes);     // Пути для работы с категориями

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
>>>>>>> Matrix-Skills
});