import React from "react";
import "./../App.css";

//important- as it mentioned only ui no functionality in the question
//
const StudentForm = () => {
  // const onclick(()=>{})
  return (
    <div className="student-form flex " >
      <h2>Add New Student</h2>
      <form>
        <label >Student Name</label>
        <input type="text" placeholder="Enter Student Name" />
        <br />
        <label >Age</label>
        <input type="text" placeholder="Student Age" />
        <br />
        <label >Grade</label>
        <input type="text" placeholder="Student Grade" />
        <br />
        
       

        {/* TODO: Add a submit button */}
        <button onClick={onclick} >Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
