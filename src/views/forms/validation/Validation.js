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
  const Navigate = useNavigate();

  const [values, setValues] = useState(false);
  const [sdts1, setsdts1] = useState(false);
  const [sdts2, setsdts2] = useState(false);
  const [sdts3, setsdts3] = useState(false);
  const [sdts, setsdts] = useState(0);
  const [coo1, setCoo1] = useState(false);
  const [coo2, setCoo2] = useState(false);
  const [coo3, setCoo3] = useState(false);
  const [coo, setCoo] = useState(0);
  const [selects, setSelects] = useState([]);
  const [exchangeStatus1, setExchangeStatus1] = useState(false);
  const [exchangeStatus2, setExchangeStatus2] = useState(false);
  const [exchangeStatus3, setExchangeStatus3] = useState(false);
  const [exchangeStatus, setExchangeStatus] = useState(false);

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
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSelects(result.data.data);
      console.log(result.data.data);
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
    if (event.target.checked) {
      setCoo(parseInt(coo) + parseInt(event.target.value));
    } else {
      setCoo(parseInt(coo) - parseInt(event.target.value));
    }

    if (event.target.name == "coo1") {
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
    values.certificate_of_origin = coo;
  };

  const handleSendingDocsChange = (event) => {
    if (event.target.checked) {
      setsdts(parseInt(sdts) - parseInt(event.target.value));
    } else {
      setsdts(parseInt(sdts) + parseInt(event.target.value));
    }

    if (event.target.name == "sdts1") {
      setsdts1(!sdts1);
    } else if (event.target.name == "sdts2") {
      setsdts2(!sdts2);
    } else if (event.target.name == "sdts3") {
      setsdts3(!sdts3);
    }
    values.sending_docs_to_seller = sdts;
  };

  const handleExchangeStatus = (event) => {
    if (event.target.checked) {
      setExchangeStatus(parseInt(sdts) - parseInt(event.target.value));
    } else {
      setExchangeStatus(parseInt(sdts) + parseInt(event.target.value));
    }

    if (event.target.name == "exchangeStatus1") {
      setExchangeStatus1(!exchangeStatus1);
    } else if (event.target.name == "exchangeStatus2") {
      setExchangeStatus2(!exchangeStatus2);
    } else if (event.target.name == "exchangeStatus3") {
      setExchangeStatus3(!exchangeStatus3);
    }
    values.exchangeStatus = exchangeStatus;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CForm className="row g-3">
      {/*buying-orders-table*/}
      <CCol xs={4}>
        <CFormInput
          type="date"
          label="Date of Purchase"
          name="date_of_purchase"
          onChange={handleInputChange}
          value={values.date_of_purchase}
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          label="Contract No."
          name="contract_no"
          onChange={handleInputChange}
          value={values.contract_no}
        />
      </CCol>
      <CCol xs={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="company_id"
          label="Company"
          name="company_id"
          required
          tooltipFeedback
          onChange={handleInputChange}
          value={values.company_id}
        >
          {/* {makeOption()} */}
          <option value={1}>1</option>
        </CFormSelect>
      </CCol>
      <CCol xs={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="material_id"
          label="Material "
          name="material_id"
          required
          tooltipFeedback
          onChange={handleInputChange}
          value={values.material_id}
        >
          {/* {makeOption1()} */}
          <option value={1}>1</option>
        </CFormSelect>
      </CCol>
      <CCol md={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="analysis"
          label="Analysis"
          name="analysis"
          required
          tooltipFeedback
          onChange={handleInputChange}
          value={values.analysis}
        >
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="2">2</option>
        </CFormSelect>
      </CCol>
      <CCol md={4}>
        <CFormSelect
          id="exchange"
          label="Exchange Id"
          name="exchange"
          onChange={handleInputChange}
        >
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="2"> 2</option>
        </CFormSelect>
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Quantity"
          name="quantity"
          onChange={handleInputChange}
          value={values.quantity}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Agent Id"
          name="agent_id"
          onChange={handleInputChange}
          value={values.agent_id}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="transit Company Id"
          name="transit_company_id"
          onChange={handleInputChange}
          value={values.transit_company_id}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Packaging Weight"
          name="packaging_weight"
          onChange={handleInputChange}
          value={values.packaging_weight}
        />
      </CCol>
      <CCol xs={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="container_size"
          label="Container Size"
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
          label="Packaging Style"
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
        <CFormInput type="number" label="Buying Price" name="buying_price" />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Selling Price"
          name="selling_price"
          onChange={handleInputChange}
          value={values.selling_price}
        />
      </CCol>
      <CCol xs={4}>
        <CFormSelect
          feedbackInvalid="Please select a valid id."
          id="term"
          label="Term"
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
          label="Analysis Result"
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
          label="Notes"
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
      <CCol xs={4}>
        <p>Sending Docs to Seller</p>
        <CFormCheck
          inline
          name="sdts1"
          value="1"
          label="1"
          onChange={handleSendingDocsChange}
          checked={sdts1}
        />
        <CFormCheck
          inline
          name="sdts2"
          value="2"
          label="2"
          onChange={handleSendingDocsChange}
          checked={sdts2}
        />
        <CFormCheck
          inline
          name="sdts3"
          value="3"
          label="3"
          onChange={handleSendingDocsChange}
          checked={sdts3}
        />
      </CCol>
      <CCol xs={4}>
        <p>Certificate of Origin</p>
        <CFormCheck
          inline
          name="coo1"
          value="1"
          label="1"
          onChange={handleCooChange}
          checked={coo1}
        />
        <CFormCheck
          inline
          name="coo2"
          value="2"
          label="2"
          onChange={handleCooChange}
          checked={coo2}
        />
        <CFormCheck
          inline
          name="coo3"
          value="3"
          label="3"
          onChange={handleCooChange}
          checked={coo3}
        />
      </CCol>
      <CCol xs={4}>
        <p>Exchange Status</p>
        <CFormCheck
          inline
          name="exchangeStatus1"
          value="1"
          label="1"
          onChange={handleExchangeStatus}
          checked={exchangeStatus1}
        />
        <CFormCheck
          inline
          name="exchangeStatus2"
          value="2"
          label="2"
          onChange={handleExchangeStatus}
          checked={exchangeStatus2}
        />
        <CFormCheck
          inline
          name="exchangeStatus3"
          value="3"
          label="3"
          onChange={handleExchangeStatus}
          checked={exchangeStatus3}
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
