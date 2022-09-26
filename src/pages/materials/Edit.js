import { CForm, CFormInput, CCol, CButton } from "@coreui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Edit = () => {
  const navigate = useNavigate();

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
      toast.success("success");
      navigate("/pages/materials");
    } catch (error) {
      toast.error(error.message);
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
      <CCol md={4}>
        <CFormInput
          label="name"
          name="name"
          onChange={handleInputChange}
          value={values.name}
        />
      </CCol>
      <br></br>
      <CCol xs={2}>
        <CButton
          onClick={() => {
            navigate("/pages/materials");
          }}
          className="me-md-2"
        >
          Back
        </CButton>
        <CButton onClick={SubmitHandler}>Submit</CButton>
      </CCol>
    </CForm>
  );
};
export default Edit;
