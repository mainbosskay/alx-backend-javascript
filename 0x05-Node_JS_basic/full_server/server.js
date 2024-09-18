import express from 'express';
import controllerRoutes from './routes/index';

const app = express();
const port = 1245;

controllerRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
module.exports = app;
