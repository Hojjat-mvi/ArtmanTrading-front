import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import {
  sending_docs_to_seller,
  certificate_of_origin,
  exchange_status,
} from "../utils/toppings";

export const Edit = () => {
  const location = useLocation();

  const order = location.state.order;

  const Navigate = useNavigate();

  var DocsCheck = order.sending_docs_to_seller.toString().split("");
  var DocsIsCheck = [];
  if (DocsCheck < 10) {
    DocsCheck.unshift("0");
  }
  DocsCheck[0] === "0" ? (DocsIsCheck[0] = false) : (DocsIsCheck[0] = true);
  DocsCheck[1] === "0" ? (DocsIsCheck[1] = false) : (DocsIsCheck[1] = true);

  var CooCheck = order.certificate_of_origin.toString().split("");
  var CooIsCheck = [];
  if (order.certificate_of_origin < 10 && CooCheck.length < 4) {
    CooCheck.unshift("0");
    CooCheck.unshift("0");
    CooCheck.unshift("0");
  }
  if (order.certificate_of_origin < 100 && CooCheck.length < 4) {
    CooCheck.unshift("0");
    CooCheck.unshift("0");
  }
  if (order.certificate_of_origin < 1000 && CooCheck.length < 4) {
    CooCheck.unshift("0");
  }
  CooCheck[0] === "0" ? (CooIsCheck[0] = false) : (CooIsCheck[0] = true);
  CooCheck[1] === "0" ? (CooIsCheck[1] = false) : (CooIsCheck[1] = true);
  CooCheck[2] === "0" ? (CooIsCheck[2] = false) : (CooIsCheck[2] = true);
  CooCheck[3] === "0" ? (CooIsCheck[3] = false) : (CooIsCheck[3] = true);

  var ExchangeCheck = order.exchange_status.toString().split("");
  var ExchangeIsCheck = [];
  if (order.exchange_status < 10 && ExchangeCheck.length < 3) {
    ExchangeCheck.unshift("0");
    ExchangeCheck.unshift("0");
  }
  if (order.exchange_status < 100 && ExchangeCheck.length < 3) {
    ExchangeCheck.unshift("0");
  }

  ExchangeCheck[0] === "0"
    ? (ExchangeIsCheck[0] = false)
    : (ExchangeIsCheck[0] = true);
  ExchangeCheck[1] === "0"
    ? (ExchangeIsCheck[1] = false)
    : (ExchangeIsCheck[1] = true);
  ExchangeCheck[2] === "0"
    ? (ExchangeIsCheck[2] = false)
    : (ExchangeIsCheck[2] = true);

  const [values, setValues] = useState(order);
  const [sendingDocsToSeller, setSendingDocsToSeller] = useState(DocsIsCheck);
  const [certificateOfOrigin, setCertificateOfOrigin] = useState(CooIsCheck);
  const [exchangeStatus, setExchangeStatus] = useState(ExchangeIsCheck);
  const [validated, setValidated] = useState(false);

  const handleExchanges = (position) => {
    setExchangeStatus(
      new Array(exchange_status.length).fill(order.exchange_status)
    );

    const updated = exchangeStatus.map((item, index) =>
      index === position ? !item : item
    );

    setExchangeStatus(updated);

    const result = updated.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + exchange_status[index].value;
      }
      return sum;
    }, 0);

    setValues({
      ...values,
      exchange_status: result,
    });
  };

  const handleDocsChange = (position) => {
    setSendingDocsToSeller(
      new Array(sending_docs_to_seller.length).fill(false)
    );

    const updated = sendingDocsToSeller.map((item, index) =>
      index === position ? !item : item
    );

    setSendingDocsToSeller(updated);

    const result = updated.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + sending_docs_to_seller[index].value;
      }
      return sum;
    }, 0);

    setValues({
      ...values,
      sending_docs_to_seller: result,
    });
  };

  const handleCooChange = (position) => {
    setCertificateOfOrigin(
      new Array(certificate_of_origin.length).fill(order.certificate_of_origin)
    );

    const updated = certificateOfOrigin.map((item, index) =>
      index === position ? !item : item
    );

    setCertificateOfOrigin(updated);

    const result = updated.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + certificate_of_origin[index].value;
      }
      return sum;
    }, 0);

    setValues({
      ...values,
      certificate_of_origin: result,
    });
  };

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
        const res = await axios.put(
          `http://localhost:8000/api/buying-orders/${order.id}`,
          values,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (res.status === 200) {
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
          <Options
            url={"companies"}
            Data={values.company_id}
            name={"company_id"}
          />
        </CCol>
        <CCol xs={4}>
          <CFormLabel>Material</CFormLabel>
          <Options
            url={"materials"}
            Data={values.material_id}
            name={"material_id"}
          />
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
          <Options
            url={"exchanges"}
            Data={values.exchange_id}
            name={"exchange_id"}
          />
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
          <Options url={"agents"} Data={values.agent_id} name={"agent_id"} />
        </CCol>
        <CCol xs={4}>
          <CFormLabel>Transit Company</CFormLabel>
          <Options
            url={"transit-companies"}
            Data={values.transit_company_id}
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
            onChange={handleInputChange}
            value={values.buying_price || ""}
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
          {sending_docs_to_seller.map(({ label }, index) => {
            return (
              <CFormCheck
                key={index}
                inline
                type="checkbox"
                label={label}
                checked={sendingDocsToSeller[index]}
                onChange={() => handleDocsChange(index)}
              />
            );
          })}
        </CCol>
        <CCol xs={4}>
          <p>Certificate of Origin</p>
          {certificate_of_origin.map(({ label }, index) => {
            return (
              <CFormCheck
                key={index}
                inline
                label={label}
                checked={certificateOfOrigin[index]}
                onChange={() => handleCooChange(index)}
              />
            );
          })}
        </CCol>
        <CCol xs={4}>
          <p>Exchange Status</p>
          {exchange_status.map(({ label }, index) => {
            return (
              <CFormCheck
                key={index}
                inline
                label={label}
                checked={exchangeStatus[index]}
                onChange={() => handleExchanges(index)}
              />
            );
          })}
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

export default Edit;
