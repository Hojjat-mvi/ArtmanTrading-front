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
  CFormLabel,
} from "@coreui/react";

import Options from "src/components/Options";
import axios from "axios";
import { toast } from "react-toastify";
import { ValueProvider } from "src/context/valueContext";
const BuyingOrders = () => {
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
  const [exchangeStatus1, setExchangeStatus1] = useState(false);
  const [exchangeStatus2, setExchangeStatus2] = useState(false);
  const [exchangeStatus3, setExchangeStatus3] = useState(false);
  const [exchangeStatus, setExchangeStatus] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const SubmitHandler = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
      event.preventDefault();
      const token = localStorage.getItem("token");
      try {
        const res = await axios.post(
          "http://localhost:8000/api/buying-orders",
          values,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (res.status === 201) {
          toast.success("form saved");
          Navigate("/pages/orders");
        } else {
          toast.error("error");
        }
      } catch (e) {
        toast.error(e.message);
      }
    }
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

  useEffect(() => {}, []);

  return (
    <ValueProvider
      value={{
        values: values,
        onValueChange: (value, name) => setValues({ ...values, [name]: value }),
      }}
    >
      <CForm
        className="row g-3 needs-BuyingOrders"
        noValidate
        validated={validated}
        onSubmit={SubmitHandler}
      >
        <CCol xs={12}>
          <CButton
            onClick={() => {
              Navigate("/pages/orders");
            }}
            shape="rounded-pill"
            style={{ marginBottom: "10px" }}
          >
            Back
          </CButton>
        </CCol>
        {/*buying-orders-table*/}
        <CCol xs={4}>
          <CFormInput
            type="date"
            label="Date of Purchase"
            name="date_of_purchase"
            onChange={handleInputChange}
            value={values.date_of_purchase || ""}
            required
          />
        </CCol>
        <CCol md={4}>
          <CFormInput
            type="text"
            label="Contract"
            name="contract_no"
            onChange={handleInputChange}
            value={values.contract_no || ""}
            required
          />
        </CCol>
        <CCol xs={4}>
          <CFormLabel>Companies</CFormLabel>
          <Options url={"companies"} Data={values} name={"company_id"} />
        </CCol>
        <CCol xs={4}>
          <CFormLabel>Material</CFormLabel>
          <Options url={"materials"} Data={values} name={"material_id"} />
        </CCol>
        <CCol md={4}>
          <CFormSelect
            id="analysis"
            label="Analysis"
            name="analysis"
            tooltipFeedback
            onChange={handleInputChange}
            value={values.analysis || ""}
          >
            <option value="1">Needed</option>
            <option value="2">Reported</option>
            <option value="2">Sent</option>
          </CFormSelect>
        </CCol>
        <CCol md={4}>
          <CFormLabel>Exchange</CFormLabel>
          <Options url={"exchanges"} Data={values} name={"exchange_id"} />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Quantity"
            name="quantity"
            onChange={handleInputChange}
            value={values.quantity || ""}
            placeholder="Quantity in KG"
            required
          />
        </CCol>
        <CCol xs={4}>
          <CFormLabel>Agent</CFormLabel>
          <Options url={"agents"} Data={values} name={"agent_id"} />
        </CCol>
        <CCol xs={4}>
          <CFormLabel>Transit Company</CFormLabel>
          <Options
            url={"transit-companies"}
            Data={values}
            name={"transit_company_id"}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Packaging Weight"
            name="packaging_weight"
            onChange={handleInputChange}
            value={values.packaging_weight || ""}
            placeholder="Packaging Weight in KG"
          />
        </CCol>
        <CCol xs={4}>
          <CFormSelect
            id="container_size"
            label="Container Size"
            name="container_size"
            required
            tooltipFeedback
            onChange={handleInputChange}
            value={values.container_size || ""}
          >
            <option value="" hidden>
              Choose...
            </option>
            <option value="1">20 Feet</option>
            <option value="2">40 Feet</option>
          </CFormSelect>
        </CCol>
        <CCol xs={4}>
          <CFormSelect
            id="packaging_style"
            label="Packaging Style"
            name="packaging_style"
            required
            tooltipFeedback
            onChange={handleInputChange}
            value={values.packaging_style || ""}
          >
            <option value="" hidden>
              Choose...
            </option>
            <option value="1">Loose</option>
            <option value="2">Bundle</option>
            <option value="3">Bracket</option>
            <option value="4">Jumbo</option>
          </CFormSelect>
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Buying Price"
            placeholder="Buying price..."
            name="buying_price"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Selling Price"
            name="selling_price"
            placeholder="Selling price..."
            onChange={handleInputChange}
            value={values.selling_price || ""}
          />
        </CCol>
        <CCol xs={4}>
          <CFormSelect
            id="term"
            label="Term"
            name="term"
            required
            tooltipFeedback
            onChange={handleInputChange}
            value={values.term || ""}
          >
            <option value="1">FCA</option>
            <option value="2">FOB</option>
            <option value="3">DF</option>
          </CFormSelect>
        </CCol>

        <CCol md={12}>
          <CFormTextarea
            type="text"
            label="Analysis Result"
            name="analysis_result"
            onChange={handleInputChange}
            value={values.analysis_result || ""}
            placeholder="Received analysis"
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
            value={values.notes || ""}
            placeholder="Related notes"
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
            value="1|| ''"
            label="Received"
            onChange={handleSendingDocsChange}
            checked={sdts1}
          />
          <CFormCheck
            inline
            name="sdts2"
            value="2|| ''"
            label="Sent"
            onChange={handleSendingDocsChange}
            checked={sdts2}
          />
        </CCol>
        <CCol xs={4}>
          <p>Certificate of Origin</p>
          <CFormCheck
            inline
            name="coo1"
            value="1"
            label="Need?"
            onChange={handleCooChange}
            checked={coo1}
          />
          <CFormCheck
            inline
            name="coo2"
            value="2|| ''"
            label="Announced"
            onChange={handleCooChange}
            checked={coo2}
          />
          <CFormCheck
            inline
            name="coo3"
            value="3|| ''"
            label="Received"
            onChange={handleCooChange}
            checked={coo3}
          />
          <CFormCheck
            inline
            name="coo4"
            value="4|| ''"
            label="Sent to client"
            onChange={handleCooChange}
            checked={coo3}
          />
        </CCol>
        <CCol xs={4}>
          <p>Exchange Status</p>
          <CFormCheck
            inline
            name="exchangeStatus1"
            value="1|| ''"
            label="Invoice"
            onChange={handleExchangeStatus}
            checked={exchangeStatus1}
          />
          <CFormCheck
            inline
            name="exchangeStatus2"
            value="2|| ''"
            label="Received"
            onChange={handleExchangeStatus}
            checked={exchangeStatus2}
          />
          <CFormCheck
            inline
            name="exchangeStatus3"
            value="3|| ''"
            label="Sent"
            onChange={handleExchangeStatus}
            checked={exchangeStatus3}
          />
        </CCol>
        <CButtonToolbar className="mb-3">
          <CCol>
            <CButton style={{ marginBottom: "5px" }} type="submit">
              submit
            </CButton>
          </CCol>
        </CButtonToolbar>
      </CForm>
    </ValueProvider>
  );
};

export default BuyingOrders;
