const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  name: String,
  fileType: String,
  filePath: String,
  uploadedAt: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = mongoose.model("Document", documentSchema);
