function getStudentsByLocation(studentsList, city) {
  if (studentsList instanceof Array) {
    return studentsList.filter((student) => student.location === city);
  }
  return [];
}
export default getStudentsByLocation;
