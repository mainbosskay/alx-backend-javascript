const fs = require('fs');

function countStudents(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (fileError, data) => {
      if (fileError) {
        reject(Error('Cannot load the database'));
        return;
      }
      const results = [];
      let logMssge;

      const dbContent = data.toString().split('\n');
      const studentRecords = dbContent.filter((item) => item);
      const students = studentRecords.map((item) => item.split(','));

      const totalStudents = students.length ? students.length - 1 : 0;
      logMssge = `Number of students: ${totalStudents}`;
      console.log(logMssge);
      results.push(logMssge);

      const studentsField = {};
      for (const indx in students) {
        if (indx !== 0) {
          if (!studentsField[students[indx][3]]) studentsField[students[indx][3]] = [];
          studentsField[students[indx][3]].push(students[indx][0]);
        }
      }

      delete studentsField.field;

      for (const field of Object.keys(studentsField)) {
        logMssge = `Number of students in ${field}: ${studentsField[field].length}. List: ${studentsField[field].join(', ')}`;
        console.log(logMssge);
        results.push(logMssge);
      }
      resolve(results);
    });
  });
}

module.exports = countStudents;
