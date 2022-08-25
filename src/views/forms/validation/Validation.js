import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CForm,
  CCol,
  CFormInput,
  CButton,
  CFormCheck,
  CFormSelect,
  CFormTextarea,
  CButtonToolbar,
  CButtonGroup,
} from "@coreui/react";
import axios from "axios";

import CreationModal from "../../../components/CreationModal.js";
import { toast } from "react-toastify";

const Validation = () => {
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
    number: "",
    loading_date: "",
    origin_weight: "",
    departure_date: "",
    first_weight: "",
    second_weight: "",
    sealed_weight: "",
    pod: "",
    bundle: "",
    seller_net_weight: "",
    buyer_net_weight: "",
    container_number: "",
    seal_number: "",
    fixed_seller_lme_price: "",
    fixed_buyer_lme_price: "",
    fixed_buyer_lme_price_date: "",
    lme_fixed_date: "",
    lme_expiration_date: "",
    number: "",
    to_port: "",
    process: "",
    pic: "",
    seal_pic: "",
    submit: "",
    thc_accounting_approval_text: "",
    thc_accounting_approval: "",
    custom_agent_invoice_status: "",
    custom_agent_invoice_currency: "",
    custom_agent_invoice_amount: "",
    transit_agent: "",
    booking: "",
    shipping_correspondence: "",
    announce_booking: "",
    send_package_to_client: "",
    invoice_status: "",
    cargos_statement: "",
    claim: "",
  };

  const Navigate = useNavigate();

  const [values, setValues] = useState(initialValues);
  const [sdts1, setsdts1] = useState(false);
  const [sdts2, setsdts2] = useState(false);
  const [sdts3, setsdts3] = useState(false);
  const [coo1, setCoo1] = useState(false);
  const [coo2, setCoo2] = useState(false);
  const [coo3, setCoo3] = useState(false);
  const [sdts, setsdts] = useState(0);
  const [coo, setCoo] = useState(0);
  const [selects, setSelects] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    Navigate("/forms/Validation2", { state: { values } });
  };

  const getData = async () => {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(
        `http://localhost:8000/api/buying-orders`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSelects(result.data.data);
    } catch (e) {
      toast.error("can not get data");
      console.log(e.message);
    }
  };

  const makeOption = () => {
    return (
      <>
        {selects.map((select) => (
          <option value={select.company_id} key={select.id}>
            {select.company_id}
          </option>
        ))}
      </>
    );
  };

  const makeOption1 = () => {
    return (
      <>
        {selects.map((select) => (
          <option value={select.material_id} key={select.id}>
            {select.material_id}
          </option>
        ))}
      </>
    );
  };

  // New way to handle coo value
  const handleCooChange = (event) => {
    if (event.target.name == "coo1") {
      if (coo1) {
        setCoo(parseInt(coo) - parseInt(event.target.value));
      } else {
        setCoo(parseInt(coo) + parseInt(event.target.value));
      }
      setCoo1(!coo1);
    } else if (event.target.name == "coo2") {
      if (coo2) {
        setCoo(parseInt(coo) - parseInt(event.target.value));
      } else {
        setCoo(parseInt(coo) + parseInt(event.target.value));
      }
      setCoo2(!coo2);
    } else if (event.target.name == "coo3") {
      if (coo3) {
        setCoo(parseInt(coo) - parseInt(event.target.value));
      } else {
        setCoo(parseInt(coo) + parseInt(event.target.value));
      }
      setCoo3(!coo3);
    }
    console.log(coo);
    values.certificate_of_origin = coo;
  };

  const handleSendingDocsChange = (event) => {
    if (event.target.name == "sdts1") {
      if (sdts1) {
        setsdts(parseInt(sdts) - parseInt(event.target.value));
      } else {
        setsdts(parseInt(sdts) + parseInt(event.target.value));
      }
      setsdts1(!sdts1);
    } else if (event.target.name == "sdts2") {
      if (sdts2) {
        setsdts(parseInt(sdts) - parseInt(event.target.value));
      } else {
        setsdts(parseInt(sdts) + parseInt(event.target.value));
      }
      setsdts2(!sdts2);
    } else if (event.target.name == "sdts3") {
      if (sdts3) {
        setsdts(parseInt(sdts) - parseInt(event.target.value));
      } else {
        setsdts(parseInt(sdts) + parseInt(event.target.value));
      }
      setsdts3(!sdts3);
    }
    console.log(sdts);
    values.sending_docs_to_seller = sdts;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CForm className="row g-3">
      <CCol md={12}>
        <CButton
          onClick={() => {
            Navigate("/pages/agents");
          }}
          
        >
          Create new agent
        </CButton>
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
          {makeOption()}
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
          {makeOption1()}
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
          <option value="2"> 2</option>
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
          <option value="1"> a</option>
          <option value="2"> b</option>
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
          <option value="1"> a</option>
          <option value="2"> b</option>
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
          <option value="1"> a</option>
          <option value="2"> b</option>
          <option value="3"> c</option>
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
          name="sdts1"
          value="1"
          label="1"
          onChange={handleSendingDocsChange}
          checked={sdts1}
        />
        <CFormCheck
          name="sdts2"
          value="2"
          label="2"
          onChange={handleSendingDocsChange}
          checked={sdts2}
        />
        <CFormCheck
          name="sdts3"
          value="3"
          label="3"
          onChange={handleSendingDocsChange}
          checked={sdts3}
        />
      </CCol>

      <CCol xs={12}>
        <p>certificate_of_origin</p>
        <CFormCheck
          name="coo1"
          value="1"
          label="1"
          onChange={handleCooChange}
          checked={coo1}
        />
        <CFormCheck
          name="coo2"
          value="2"
          label="2"
          onChange={handleCooChange}
          checked={coo2}
        />
        <CFormCheck
          name="coo3"
          value="3"
          label="3"
          onChange={handleCooChange}
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
            Next Page
          </CButton>
        </CCol>
      </CButtonToolbar>
    </CForm>
  );
};

export default Validation;
