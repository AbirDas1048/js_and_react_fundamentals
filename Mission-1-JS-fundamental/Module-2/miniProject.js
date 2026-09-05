let students = [
    {id: 101, name: 'Karim', dob: '2010-11-10', dept: 'CSE'},
    {id: 102, name: 'Rahim', dob: '2011-09-10', dept: 'ETE'},
    {id: 103, name: 'Fahim', dob: '2008-12-01', dept: 'PHY'},
    {id: 104, name: 'Sahin', dob: '2005-07-28', dept: 'CSE'},
]

const generateNewId = () => students.length > 0 ? students[students.length - 1].id + 1 : 101;

const printText = (printText) => console.log(`${printText}`);

const addNewStudent = (stdName, stdDob, stdDept) => {

    let newStudent = {
        id: generateNewId(),
        name: stdName,
        dob: stdDob,
        dept: stdDept
    }

    students.push(newStudent);
    printText(`New student added successfully`);
};

const getAll = () => {
    for (let student of students){
        console.log(student);
    }
};

const searchStudentById = (studentId) => {
    for (const [index, student] of students.entries()) {
        if (student.id == studentId) {
            return {
                index: index,
                student: student
            };
        }
    }

    return null;
};

const findStudent = (id) => {
    let result = searchStudentById(id);

    result ? console.log(`Information with that id ${id} is:`, result.student) : printText(`No student found with this id: ${id}`);
}

const deleteStudentById = (id) => {
    let result = searchStudentById(id);

    if (result != null) {
        let deletedStd = students.splice(result.index, 1);
        console.log(`deleted ${deletedStd[0].name} id: ${id} deleted`);
    } else {
        print("404 not found");
    }
};

addNewStudent('Abir', '1995-10-31', 'CSE');
getAll();
findStudent(105);
deleteStudentById(102);

getAll();




