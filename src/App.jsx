import React from "react";
import StudentList from "./components/StudentList.jsx";
import StudentForm from "./components/StudentForm.jsx";
import "./App.css";



const App = () => {
  return (
    <div className="app-container">
      <h1>Student Management System</h1>
      <StudentForm  />
      <StudentList />
    </div>
  );
};

export default App;
