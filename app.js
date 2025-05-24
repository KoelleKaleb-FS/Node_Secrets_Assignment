require('dotenv').config();
const express = require('express');
const app = express();

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error('API_KEY is missing. Please provide it in the .env file.');
}

app.get('/', (req, res) => {
  res.send(`Your API Key is: ${API_KEY}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
