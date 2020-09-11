const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This is from express server');
});

app.listen(8000, () => {
  console.log('listening on port 8000');
});
