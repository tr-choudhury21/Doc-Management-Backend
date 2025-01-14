const Document = require("../models/DocumentModel");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure uploads folder exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Save files to 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const uploadFile = async (req, res) => {
  try {
    const { filename, mimetype } = req.file;
    const filePath = path.join("uploads", filename); // Relative path for DB

    const newDocument = new Document({
      name: filename,
      fileType: mimetype,
      filePath,
    });

    await newDocument.save();

    res.status(201).json({ message: "File uploaded successfully!", newDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "File upload failed", error });
  }
};

module.exports = { upload, uploadFile };
