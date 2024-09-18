import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, database) {
    readDatabase(database)
      .then((studentsField) => {
        const students = [];
        let logMssge;
        students.push('This is the list of our students');
        for (const field of Object.keys(studentsField)) {
          logMssge = `Number of students in ${field}: ${studentsField[field].length}. List: ${studentsField[field].join(', ')}`;
          students.push(logMssge);
        }
        response.send(200, `${students.join('\n')}`);
      })
      .catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, database) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(database)
        .then((studentsField) => {
          const students = studentsField[major];
          response.send(200, `List: ${students.join(', ')}`);
        })
        .catch(() => {
          response.send(500, 'Cannot load the database');
        });
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
