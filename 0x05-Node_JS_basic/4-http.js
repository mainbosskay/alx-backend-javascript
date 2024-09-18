const http = require('http');

const port = 1245;
const host = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const respMssge = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', respMssge.length);
  res.statusCode = 200;
  res.write(Buffer.from(respMssge));
});

app.listen(port, host, () => {
  process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;
