const express = require('express');
const mongoose = require('mongoose');
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
});