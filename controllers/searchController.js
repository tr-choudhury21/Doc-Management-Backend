const axios = require("axios");

const searchDocuments = async (req, res) => {
  const { query } = req.body;
  try {
    // Replace with your FastAPI URL
    const fastApiResponse = await axios.post("http://localhost:8000/search", { query });
    res.status(200).json(fastApiResponse.data);
  } catch (error) {
    res.status(500).json({ message: "Search failed", error });
  }
};

module.exports = { searchDocuments };
