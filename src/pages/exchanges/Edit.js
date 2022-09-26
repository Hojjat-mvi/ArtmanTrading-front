import { CButton, CForm, CFormInput, CCol } from "@coreui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Edit = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const exchange = location.state.exchange;

  const [values, setValues] = useState(exchange);

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `http://localhost:8000/api/exchanges/${exchange.id}`,
        values,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("success");
      navigate("/pages/exchanges");
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
      <CCol xs={6}>
        <CFormInput
          label="Name"
          name="name"
          onChange={handleInputChange}
          value={values.name}
        ></CFormInput>
      </CCol>
      <br></br>
      <CCol xs={2}>
        <CButton onClick={SubmitHandler}>Submit</CButton>
      </CCol>
    </CForm>
  );
};
export default Edit;
