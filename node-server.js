const http = require('http');

const nodeserver = http.createServer((req, res) => {
  res.write('This is from Node server');
  res.end();
});

nodeserver.listen(8000, () => {
  console.log('listening on port 8000');
});
