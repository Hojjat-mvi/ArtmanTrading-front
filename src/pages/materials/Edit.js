import { CForm, CFormInput, CCol, CButton } from "@coreui/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const location = useLocation();

  const material = location.state.material;

  const [values, setValues] = useState(material);

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `http://localhost:8000/api/materials/${material.id}`,
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
    <CForm>
      <CFormInput
        label="name"
        name="name"
        onChange={handleInputChange}
        value={values.name}
      />
      <br></br>
      <CCol xs={2}>
        <CButton onClick={SubmitHandler}>Submit</CButton>
      </CCol>
    </CForm>
  );
};
export default Edit;
