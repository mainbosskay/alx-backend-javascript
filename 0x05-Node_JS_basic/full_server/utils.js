const fs = require('fs');

function readDatabase(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (fileError, data) => {
      if (fileError) {
        reject(Error(fileError));
        return;
      }
      const dbContent = data.toString().split('\n');
      const studentRecords = dbContent.filter((item) => item);
      const students = studentRecords.map((item) => item.split(','));

      const studentsField = {};
      for (const indx in students) {
        if (indx !== 0) {
          if (!studentsField[students[indx][3]]) studentsField[students[indx][3]] = [];
          studentsField[students[indx][3]].push(students[indx][0]);
        }
      }

      delete studentsField.field;
      resolve(studentsField);
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
