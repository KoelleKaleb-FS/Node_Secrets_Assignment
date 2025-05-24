const express = require('express');
const secrets = require('./secrets.json');
const app = express();

app.get('/', (req, res) => {
  res.send(`Your API Key is: ${secrets.API_KEY}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
