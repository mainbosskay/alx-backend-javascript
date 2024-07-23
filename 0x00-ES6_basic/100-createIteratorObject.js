export default function createIteratorObject(report) {
  return (function* generateIterator() {
    // eslint-disable-next-line no-unused-vars
    for (const [department, departmentEmployees] of Object.entries(report.allEmployees)) {
      for (const employee of departmentEmployees) {
        yield employee;
      }
    }
  }());
}
