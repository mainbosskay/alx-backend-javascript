import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function controllerRoutes(app) {
  const apiRouter = express.Router();
  app.use('/', apiRouter);
  apiRouter.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });
  apiRouter.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res, process.argv[2]);
  });
  apiRouter.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res, process.argv[2]);
  });
}

export default controllerRoutes;
module.exports = controllerRoutes;
