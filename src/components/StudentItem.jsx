import React from "react";

const StudentItem = ({ student }) => {
  const {id,name,age,grade}=student
  return (
    <li className="student-item">
      {/* TODO: Display student name, age, and grade */}
      <h3> {name} </h3>
      <h3> {age} </h3>
      <h3> {grade} </h3>
    </li>
  );
};

export default StudentItem;
