const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Route to list all uploaded files
router.get('/files', (req, res) => {
    const uploadsDir = path.join(__dirname, '../controllers/uploads'); // Adjust path to 'uploads' directory

    fs.readdir(uploadsDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to fetch files.' });
        }

        const fileDetails = files.map((file) => ({
            name: file,
            url: `${req.protocol}://${req.get('host')}/uploads/${file}`,
        }));

        res.status(200).json(fileDetails);
    });
});

module.exports = router;
