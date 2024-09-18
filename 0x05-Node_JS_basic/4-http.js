const http = require('http');

const port = 1245;
const host = 'localhost';
const app = http.createServer();

app.on('request', (_, resp) => {
  const respMssge = 'Hello Holberton School!';
  resp.setHeader('Content-Type', 'text/plain');
  resp.setHeader('Content-Length', respMssge.length);
  resp.statusCode = 200;
  resp.write(Buffer.from(respMssge));
});

app.listen(port, host, () => {
  process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.export = app;
