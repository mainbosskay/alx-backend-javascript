function getListStudentIds(studentsList) {
  if (studentsList instanceof Array) {
    return studentsList.map((student) => student.id);
  }
  return [];
}
export default getListStudentIds;
