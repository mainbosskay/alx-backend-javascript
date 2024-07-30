function getStudentIdsSum(studentsList) {
  return studentsList.reduce((stdntIdThen, stdntIdNow) => (stdntIdThen + stdntIdNow.id), 0);
}
export default getStudentIdsSum;
