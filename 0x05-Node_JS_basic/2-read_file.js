const fs = require('fs');

function countStudents(dbPath) {
  let dbContent;
  try {
    dbContent = fs.readFileSync(dbPath);
  } catch (FileError) {
    throw new Error ('Cannot load the database');
  }

  const lines = dbContent.toString().split('\n');
  const studentRecords = lines.filter((item) => item);
  const students = studentRecords.map((item) => item.split(','));
  const totalStudents = students.length ? students.length -1 : 0;
  console.log(`Number of students: ${totalStudents}`);

  const studentsField = {};
  for (const indx in students) {
    if (indx !== 0) {
      if (!studentsField[students[indx][3]]) studentsField[students[indx][3]] = [];
      studentsField[students[indx][3]].push(students[indx][0]);
    }
  }

  delete studentsField.field;

  for (const field of Object.keys(studentsField)) {
    console.log(
      `Number of students in ${field}: ${studentsField[field].length}. List: ${studentsField[field].join(', ')}`,
    );
  }
}

module.exports = countStudents;
