import React, { useState, Fragment } from "react";
import Form from "./Form";
import Table from "./Table";
function Profile() {
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    mobail: "",
    address: ""
  });
  const onValChange = (e) => {
    const value = (res) => ({
      ...res,
      [e.target.name]: e.target.value
    });
    setFormObject(value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { name: "", email: "", mobail: "", address: "" };
      setFormObject(isEmpty);
    }
  };
  return (
    <>
      <Form
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
      />

      <div className="table-container">
        <Table tableData={tableData} />
      </div>
    </>
  );
}
export default Profile;
