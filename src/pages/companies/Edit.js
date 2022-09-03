import { CForm, CFormInput, CButton, CCol } from "@coreui/react";
import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Edit = () => {
  const navigate = useNavigate()

  const location = useLocation();

  const company = location.state.company;

  const [values, setValues] = useState(company);

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(`http://localhost:8000/api/companies/${company.id}`, values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("created");
      navigate('/pages/companies')
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
      <CFormInput
        label="Name"
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
