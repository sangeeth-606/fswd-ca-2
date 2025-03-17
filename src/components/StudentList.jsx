import React from "react";
import StudentItem from "./StudentItem.jsx";
import "./../App.css";

// Hardcoded list of students
const studentData = [
  { id: 1, name: "Alice", age: 20, grade: "A" },
  { id: 2, name: "Bob", age: 22, grade: "B" },
  { id: 3, name: "Charlie", age: 21, grade: "A-" },
];

const StudentList = () => {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {/* TODO: Use appropriate method to display students from studentData using StudentItem component */}
        {studentData.map((stud)=>(
          <StudentItem student={stud} />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
