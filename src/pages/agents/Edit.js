import { CForm, CFormInput, CButton, CCol } from "@coreui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Edit = () => {
  const Navigate = useNavigate();

  const location = useLocation();

  const agent = location.state.agent;

  const [values, setValues] = useState(agent);

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.put(`http://localhost:8000/api/agents/${agent.id}`, values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("created");
      Navigate("/pages/agents");
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <CCol md={4}>
        <CFormInput
          label="Name"
          name="name"
          onChange={handleInputChange}
          value={values.name}
        />
      </CCol>
      <br></br>
      <CCol xs={2}>
      <CButton
          onClick={() => {
            Navigate("/pages/agents");
          }}
          className='me-md-2'
        >
          Back
        </CButton>
        <CButton onClick={SubmitHandler}>Submit</CButton>
      </CCol>
    </CForm>
  );
};
export default Edit;
