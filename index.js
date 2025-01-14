const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const dbConnection = require('./database/dbConnection');
const uploadRoutes = require('./routes/uploadRoutes');
const searchRoutes = require('./routes/searchRoutes');
const fileRoutes = require('./routes/fileRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname,'controllers', 'uploads')));

//routes
app.use('/api/upload', uploadRoutes);
app.use('/api/search', searchRoutes);
app.use('/api', fileRoutes);



//database connection
dbConnection();



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});