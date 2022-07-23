import { React, useState } from "react";
import {
  CForm,
  CCol,
  CFormInput,
  CButton,
  CFormCheck,
  CInputGroup,
  CFormSelect,
  CFormTextarea,
} from "@coreui/react";
import axios from "axios";

import Modal from "../../../components/Modal.js";

const CustomStyles = () => {
  const initialValues = {
    date_of_purchase: "",
    contract_no: "",
    analysis: "",
    company_id: "",
    material_id: "",
    analysis_result: "",
    sending_docs_to_seller: "",
    exchange_status: "",
    quantity: "",
    container_size: "",
    packaging_style: "",
    certificate_of_origin: "",
    buying_price: "",
    selling_price: "",
    packaging_weight: "",
    term: "",
    notes: "",
  };

  const [postRequest, setPostRequest] = useState("");
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/buy-orders/", values);
      alert("success");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <CForm className="row g-3">
      <CCol md={12}>
        <Modal />
      </CCol>
      {/*buying-orders-table*/}

      <CCol xs={4}>
        <CFormInput
          type="date"
          label="date_of_purchase"
          name="date_of_purchase"
          onChange={handleInputChange}
          value={values.date_of_purchase}
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          label="contract_no"
          name="contract_no"
          onChange={handleInputChange}
          value={values.contract_no}
        />
      </CCol>
      <CCol xs={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="company_id"
          label="company_id"
          name="company_id"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol xs={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="company_id"
          label="company_id"
          name="company_id"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="analysis"
          label="analysis"
          name="analysis"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="quantity"
          name="quantity"
          onChange={handleInputChange}
          value={values.quantity}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="packaging_weight"
          name="packaging_weight"
          onChange={handleInputChange}
          value={values.packaging_weight}
        />
      </CCol>
      <CCol xs={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="container_size"
          label="container_size"
          name="container_size"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol xs={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="packaging_style"
          label="packaging_style"
          name="packaging_style"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="selling_price"
          name="selling_price"
          onChange={handleInputChange}
          value={values.selling_price}
        />
      </CCol>
      <CCol xs={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="term"
          label="term"
          name="term"
          required
          tooltipFeedback
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      
      <CCol md={12}>
        <CFormTextarea
          type="text"
          label="analysis_result"
          name="analysis_result"
          onChange={handleInputChange}
          value={values.analysis_result}
        />
      </CCol>
      <CCol xs={12}>
        {" "}
        {/* textarea */}
        <CFormTextarea
          type="text"
          label="notes"
          name="notes"
          onChange={handleInputChange}
          value={values.notes}
        />
      </CCol>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CCol xs={6}>
        {" "}
        {/* checkbox */}
        {/* <CFormInput
          type="number"
          label="sending_docs_to_seller"
          name="sending_docs_to_seller"
          onChange={handleInputChange}
          value={values.sending_docs_to_seller}
        /> */}
        <CFormCheck inline id="inlineCheckbox1" value="option1" label="1" />
        <CFormCheck inline id="inlineCheckbox2" value="option2" label="2" />
        <CFormCheck inline id="inlineCheckbox2" value="option2" label="2" />
      </CCol>

      <CCol xs={6}>
        {/* <CFormInput
          type="number"
          label="certificate_of_origin"
          name="certificate_of_origin"
          onChange={handleInputChange}
          value={values.certificate_of_origin}
        /> */}
        <CFormCheck inline id="inlineCheckbox2" value="option2" label="2" />
        <CFormCheck inline id="inlineCheckbox2" value="option2" label="2" />
        <CFormCheck inline id="inlineCheckbox2" value="option2" label="2" />
      </CCol>

      <CCol xs={12}>
        <CButton
          style={{ marginBottom: "5px" }}
          type="submit"
          onClick={SubmitHandler}
        >
          Submit
        </CButton>
      </CCol>
    </CForm>
  );
};

export default CustomStyles;
