const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnection = require('./database/dbConnection');
const uploadRoutes = require('./routes/uploadRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

//routes
app.use('/api/upload', uploadRoutes);



//database connection
dbConnection();



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});