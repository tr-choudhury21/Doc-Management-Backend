const Document = require("../models/DocumentModel");
const multer = require("multer");
const path = require("path");

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});




const upload = multer({ storage });




const uploadFile = async (req, res) => {
  try {
    const { filename, mimetype, path: filePath } = req.file;

    const newDocument = new Document({
      name: filename,
      fileType: mimetype,
      filePath,
    });
    await newDocument.save();

    res.status(201).json({ message: "File uploaded successfully!", newDocument });
  } catch (error) {
    res.status(500).json({ message: "File upload failed", error });
  }
};



module.exports = { upload, uploadFile };
