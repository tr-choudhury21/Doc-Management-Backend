const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnection = require('./database/dbConnection');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));


dbConnection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});