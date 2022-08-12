import { CForm, CFormInput } from "@coreui/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Edit = () => {
  const location = useLocation();

  const agent = location.state.agent;

  const [values, setValues] = useState(agent);

  const SubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/api/buying-orders/${agent.id}`,
        values
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
      <CButton onClick={SubmitHandler}>submit</CButton>
    </CForm>
  );
};
export default Edit;
