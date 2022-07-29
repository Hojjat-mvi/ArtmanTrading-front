import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CForm,
  CCol,
  CFormInput,
  CButton,
  CFormCheck,
  CFormSelect,
  CFormTextarea,
  CLink,
  CButtonToolbar,
  CButtonGroup,
} from "@coreui/react";
import axios from "axios";

import Modal from "../../../components/Modal.js";

const Validation2 = () => {
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

  const Navigate = useNavigate();

  const [values, setValues] = useState(initialValues);
  const [sdts1, setsdts1] = useState(false);
  const [sdts2, setsdts2] = useState(false);
  const [sdts3, setsdts3] = useState(false);
  const [coo1, setCoo1] = useState(false);
  const [coo2, setCoo2] = useState(false);
  const [coo3, setCoo3] = useState(false);

  const ChangeSdts1 = () => {
    setsdts1(!sdts1);
  };

  const ChangeSdts2 = () => {
    setsdts2(!sdts2);
  };

  const ChangeSdts3 = () => {
    setsdts3(!sdts3);
  };

  const ChangeCoo1 = () => {
    setCoo1(!coo1);
  };

  const ChangeCoo2 = () => {
    setCoo2(!coo2);
  };

  const ChangeCoo3 = () => {
    setCoo3(!coo3);
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


  const SubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/buy-orders/", values);
      alert("success");
    } catch (error) {
      alert("error");
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
          onChange={handleInputChange}
          value={values.company_id}
        >
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
          onChange={handleInputChange}
          value={values.material_id}
        >
          <option value="d"> d</option>
          <option value="e"> e</option>
          <option value="f"> g</option>
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
          onChange={handleInputChange}
          value={values.analysis}
        >
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
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
          onChange={handleInputChange}
          value={values.container_size}
        >
          <option value="4"> 4</option>
          <option value="5"> 5</option>
          <option value="6"> 6</option>
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
          onChange={handleInputChange}
          value={values.packaging_style}
        >
          <option value="7"> 7</option>
          <option value="8"> 8</option>
          <option value="9"> 9</option>
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
          onChange={handleInputChange}
          value={values.term}
        >
          <option value="11"> 11</option>
          <option value="12"> 12</option>
          <option value="13"> 13</option>
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
        <p>sending_docs_to_seller</p>
        <CFormCheck
          name="checks"
          value="1"
          label="1"
          onChange={ChangeSdts1}
          checked={sdts1}
        />
        <CFormCheck
          name="checks"
          value="2"
          label="2"
          onChange={ChangeSdts2}
          checked={sdts2}
        />
        <CFormCheck
          name="checks"
          value="3"
          label="3"
          onChange={ChangeSdts3}
          checked={sdts3}
        />
      </CCol>

      <CCol xs={12}>
        <p>certificate_of_origin</p>
        <CFormCheck
          name="coo"
          value="1"
          label="1"
          onChange={ChangeCoo1}
          checked={coo1}
        />
        <CFormCheck
          name="coo"
          value="2"
          label="2"
          onChange={ChangeCoo2}
          checked={coo2}
        />
        <CFormCheck
          name="coo"
          value="3"
          label="3"
          onChange={ChangeCoo3}
          checked={coo3}
        />
      </CCol>
      <CButtonToolbar className="mb-3">
        <CCol>
          <CButton
            style={{ marginBottom: "5px" }}
            type="submit"
            onClick={SubmitHandler}
          >
            Submit
          </CButton>
        </CCol>
        <CCol>
          <CButtonGroup>
            <CButton
              onClick={() => {
                Navigate("/forms/Validation");
              }}
            >
              1
            </CButton>
            <CButton
              onClick={() => {
                Navigate("/Validation2.js");
              }}
            >
              2
            </CButton>
          </CButtonGroup>
        </CCol>
      </CButtonToolbar>
    </CForm>
  );
};

export default Validation2;
