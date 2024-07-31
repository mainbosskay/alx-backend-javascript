export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentOne: Student = {
  firstName: "Aubrey",
  lastName: "Drake",
  age: 32,
  location: "Toronto, Canada",
};
const studentTwo: Student = {
  firstName: "Jide",
  lastName: "Olatunji",
  age: 30,
  location: "Oyo, Nigeria",
};

const studentsList: Array<Student> = [
  studentOne,
  studentTwo,
];
const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  .custom-table {
    border-collapse: collapse;
  }
  .custom-header {
    font-weight: bold;
  }
  .custom-cell {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  .custom-cell:hover {
    background: gainsboro;
  }

  .custom-cell:nth-child(1) {
    text-align: center;
  }
`;

export const displayStudentsInfo = (students: Array<Student>): void => {
  const customTable = document.createElement('table');
  const customTableHead = document.createElement('thead');
  const custHeadRow = document.createElement('tr');
  const custTableBody = document.createElement('tbody');
  custHeadRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  custHeadRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  customTableHead.insertAdjacentElement('beforeend', custHeadRow);

  for (const student of students) {
    const custBodyRow = document.createElement('tr');
    custBodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    custBodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    custTableBody.insertAdjacentElement('beforeend', custBodyRow);
  }

  customTable.insertAdjacentElement('beforeend', customTableHead);
  customTable.insertAdjacentElement('beforeend', custTableBody);
  document.body.insertAdjacentElement('beforeend', customTable);
};

displayStudentsInfo(studentsList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Student Lists';
