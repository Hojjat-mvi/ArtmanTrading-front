import { React, useState } from "react";
import {
  CForm,
  CCol,
  CFormInput,
  CButton,
  CFormCheck,
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

  const [values, setValues] = useState(initialValues);
  const [sdts1, setsdts1] = useState(false);
  const [sdts2, setsdts2] = useState(false);
  const [sdts3, setsdts3] = useState(false);

  const ChangeSdts1 = () => {
    setsdts1(!sdts1);
  };

  const ChangeSdts2 = () => {
    setsdts2(!sdts2);
  };

  const ChangeSdts3 = () => {
    setsdts3(!sdts3);
  };

  if (sdts1 === true) {
    values.sending_docs_to_seller = "1";
  }

  if (sdts2 === true) {
    values.sending_docs_to_seller = "2";
  }

  if (sdts3 === true) {
    values.sending_docs_to_seller = "3";
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const checkboxes = [
    { id: 1, text: "Checkbox 1" },
    { id: 2, text: "Checkbox 1" },
    { id: 3, text: "Checkbox 1" },
  ];

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
          <option selected="" disabled="" value="choose">
            Choose...
          </option>
          <option value="A"> A </option>
          <option value="B"> B </option>
          <option value="C"> C </option>
          <option value="D"> D </option>
        </CFormSelect>
      </CCol>
      <CCol xs={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="material_id"
          label="material_id"
          name="material_id"
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
      <CCol xs={12}>
        {" "}
        {/* checkbox */}
        {/* <CFormInput
          type="number"
          label="sending_docs_to_seller"
          name="sending_docs_to_seller"
          onChange={handleInputChange}
          value={values.sending_docs_to_seller}
        /> */}
        <p>sending_docs_to_seller</p>
        <CFormCheck
          id="checks"
          value="1"
          label="1"
          onChange={ChangeSdts1}
          checked={sdts1}
        />
        <CFormCheck
          id="checks"
          value="2"
          label="2"
          onChange={ChangeSdts2}
          checked={sdts2}
        />
        <CFormCheck
          id="checks"
          value="3"
          label="3"
          onChange={ChangeSdts3}
          checked={sdts3}
        />
      </CCol>

      <CCol xs={12}>
        {/* <CFormInput
          type="number"
          label="certificate_of_origin"
          name="certificate_of_origin"
          onChange={handleInputChange}
          value={values.certificate_of_origin}
        /> */}
        <p>certificate_of_origin</p>
        <CFormCheck id="checks" value="1" label="1" checked />
        <CFormCheck id="checks" value="2" label="2" />
        <CFormCheck id="checks" value="3" label="3" />
      </CCol>

      <CCol xs={12}>
        <CButton style={{ marginBottom: "5px" }} type="submit" onClick={""}>
          Submit
        </CButton>
      </CCol>
    </CForm>
  );
};

export default CustomStyles;
