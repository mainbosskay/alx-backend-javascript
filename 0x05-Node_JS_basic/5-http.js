const http = require('http');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const database = args[0];
const port = 1245;
const host = 'localhost';
const app = http.createServer();

app.on('request', async (req, res) => {
  const respMssge = 'Hello Holberton School!';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;
  if (url === '/') {
    res.write(respMssge);
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(database);
      res.end(`${students.join('\n')}`);
    } catch (err) {
      res.end(err.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port, host, () => {
  process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;
