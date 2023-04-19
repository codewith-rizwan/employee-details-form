import React from "react";
import "./styles.css";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <div className="container">
        <h1>New Employee Details</h1>
        <p>Please fill the Form given below</p>
        <p>A Project By (Rizwan Khan)</p>
        <h3>Personal Information</h3>
        <Profile />
      </div>
    </>
  );
}
export default App;
