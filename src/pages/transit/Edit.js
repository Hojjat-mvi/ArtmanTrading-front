import { CForm, CFormInput, CButton, CCol } from "@coreui/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const location = useLocation();

  const transit = location.state.transit;

  const [values, setValues] = useState(transit);

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `http://localhost:8000/api/transit-companies/${transit.id}`,
        values,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("success");
    } catch (error) {
      alert("error");
      console.log(error.response);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <CForm onSubmit={SubmitHandler}>
      <CFormInput
        label="Name"
        name="name"
        onChange={handleInputChange}
        value={values.name}
      />
      <br></br>
      <CCol xs={2}>
        <CButton>Submit</CButton>
      </CCol>
    </CForm>
  );
};
export default Edit;
