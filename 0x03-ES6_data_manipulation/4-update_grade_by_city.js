function updateStudentGradeByCity(studentsList, city, newGrades) {
  const initialGrade = { grade: 'N/A' };
  if (studentsList instanceof Array) {
    return studentsList
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((studentGrade) => studentGrade.studentId === student.id)
          .pop() || initialGrade).grade,
      }));
  }
  return [];
}
export default updateStudentGradeByCity;
