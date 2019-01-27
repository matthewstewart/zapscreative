const express = require('express');
const api = express();
const port = 3001;

api.get('/', (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the zapscreative.com.",
    errors: [],
    data: {}
  });
});

api.listen(port, () => {
  console.log(`API listening on localhost:${port}`);
});