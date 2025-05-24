const express = require('express');
const app = express();

// Hardcoded secret
const API_KEY = 'hardcoded_secret_key_12345';

app.get('/', (req, res) => {
  res.send(`Your API Key is: ${API_KEY}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
