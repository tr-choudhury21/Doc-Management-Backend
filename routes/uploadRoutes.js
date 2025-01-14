const express = require("express");
const { upload, uploadFile } = require("../controllers/uploadController");
const router = express.Router();

router.post("/uploaddocument", upload.single("file"), uploadFile);

module.exports = router;
