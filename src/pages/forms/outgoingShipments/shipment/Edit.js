import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CForm,
  CFormInput,
  CCol,
  CButton,
  CButtonToolbar,
  CFormCheck,
  CFormSelect,
  CFormLabel,
} from "@coreui/react";
import { ValueProvider } from "src/context/valueContext";
import Options from "src/components/Options";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { Customer_Agent_Invoice_Status, submission } from "../utils/toppings";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const shipment = location.state.shipment;

  var submitCheck = shipment.submit.toString().split("");
  var submitIsCheck = [];
  if (submitCheck < 10) {
    submitCheck.unshift("0");
  }
  submitCheck[0] === "0"
    ? (submitIsCheck[0] = false)
    : (submitIsCheck[0] = true);
  submitCheck[1] === "0"
    ? (submitIsCheck[1] = false)
    : (submitIsCheck[1] = true);

  var CustomerCheck = shipment.custom_agent_invoice_status.toString().split("");
  var CustomerIsCheck = [];
  if (CustomerCheck < 10) {
    CustomerCheck.unshift("0");
  }
  CustomerCheck[0] === "0"
    ? (CustomerIsCheck[0] = false)
    : (CustomerIsCheck[0] = true);
  CustomerCheck[1] === "0"
    ? (CustomerIsCheck[1] = false)
    : (CustomerIsCheck[1] = true);

  const [values, setValues] = useState(shipment);
  const [validated, setValidated] = useState(false);
  const [customerAgentInvoiceStatus, setCustomerAgentInvoiceStatus] =
    useState(CustomerIsCheck);
  const [submissionState, setSubmissionState] = useState(submitIsCheck);

  const handleCustomer = (position) => {
    setCustomerAgentInvoiceStatus(
      new Array(Customer_Agent_Invoice_Status.length).fill(false)
    );

    const updated = customerAgentInvoiceStatus.map((item, index) =>
      index === position ? !item : item
    );

    setCustomerAgentInvoiceStatus(updated);

    const result = updated.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + Customer_Agent_Invoice_Status[index].value;
      }
      return sum;
    }, 0);

    setValues({
      ...values,
      custom_agent_invoice_status: result,
    });
  };

  const handleSubmitChange = (position) => {
    setSubmissionState(new Array(submission.length).fill(false));

    const updated = submissionState.map((item, index) =>
      index === position ? !item : item
    );

    setSubmissionState(updated);

    const result = updated.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + submission[index].value;
      }
      return sum;
    }, 0);

    setValues({
      ...values,
      submit: result,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setValues({
      ...values,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    });
  };

  // const Navigate = useNavigate();

  const SubmitHandler = async (event) => {
    const form = event.currentTarget;
    const token = localStorage.getItem("token");
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
      event.preventDefault();
    }
    try {
      const res = await axios.put(
        `http://localhost:8000/api/outgoing-shipments/${shipment.id}`,
        values,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 200) {
        toast.success("form saved");
        navigate("/pages/forms/shipmentsOutgoing");
        console.log(values);
      } else {
        console.log(values);
        toast.error("error");
      }
    } catch (e) {
      console.log(values);
      toast.error(e.messages);
    }
  };

  return (
    // outgoing-shipments
    <ValueProvider
      value={{
        values: values,
        onValueChange: (value, name) => setValues({ ...values, [name]: value }),
      }}
    >
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={SubmitHandler}
      >
        <CCol xs={12}>
          <CButton
            onClick={() => {
              navigate("/pages/forms/shipmentsOutgoing");
            }}
            style={{ marginBottom: "10px" }}
          >
            Back
          </CButton>
        </CCol>
        <CCol md={4}>
          <CFormLabel>Contract No.</CFormLabel>
          <Options
            url={"buying-orders"}
            Data={values.buying_order_id || ""}
            name={"buying_order_id"}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Number"
            name="number"
            onChange={handleInputChange}
            value={values.number || ""}
            placeholder="Enter number..."
          />
        </CCol>
        <CCol xs={4}>
          <p>Customer Agent Invoice Status</p>
          {Customer_Agent_Invoice_Status.map(({ label }, index) => {
            return (
              <CFormCheck
                key={index}
                inline
                type="checkbox"
                label={label}
                checked={customerAgentInvoiceStatus[index]}
                onChange={() => handleCustomer(index)}
              />
            );
          })}
        </CCol>
        <CCol xs={4}>
          <p>submission</p>
          {submission.map(({ label }, index) => {
            return (
              <CFormCheck
                key={index}
                inline
                type="checkbox"
                label={label}
                checked={submissionState[index]}
                onChange={() => handleSubmitChange(index)}
              />
            );
          })}
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="text"
            label="THC Accounting Approval Text"
            name="thc_accounting_approval_text"
            onChange={handleInputChange}
            value={values.thc_accounting_approval_text || ""}
          />
        </CCol>
        <CCol xs={4}>
          <CFormSelect
            label="Custom Agent Invoice Currency"
            name="custom_agent_invoice_currency"
            onChange={handleInputChange}
            value={values.custom_agent_invoice_currency || ""}
          >
            <option value="" hidden>
              Choose...
            </option>
            <option value="1">US Dollar</option>
            <option value="2">Great Britain Pound</option>
            <option value="3">Euro</option>
          </CFormSelect>
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Custom Agent Invoice Amount"
            name="custom_agent_invoice_amount"
            onChange={handleInputChange}
            value={values.custom_agent_invoice_amount || ""}
            placeholder="Enter number..."
          />
        </CCol>
        <CCol xs={4}>
          <CFormCheck
            label="To Port"
            name="to_port"
            onChange={handleInputChange}
            checked={values.to_port || ""}
          />
          <CFormCheck
            label="Analysis"
            name="analysis"
            onChange={handleInputChange}
            checked={values.analysis || ""}
          />
          <CFormCheck
            label="Process"
            name="process"
            onChange={handleInputChange}
            checked={values.process || ""}
          />
        </CCol>
        <CCol xs={4}>
          <CFormCheck
            label="Picture"
            name="pic"
            onChange={handleInputChange}
            checked={values.pic || ""}
          />
          <CFormCheck
            label="Seal Picture"
            name="seal_pic"
            onChange={handleInputChange}
            checked={values.seal_pic || ""}
          />
          <CFormCheck
            label="THC Accounting Approval"
            name="thc_accounting_approval"
            onChange={handleInputChange}
            checked={values.thc_accounting_approval || ""}
          />
        </CCol>
        <CButtonToolbar className="mb-3">
          <CCol>
            <CButton
              style={{ marginBottom: "5px" }}
              type="submit"
              color="primary"
            >
              submit
            </CButton>
          </CCol>
        </CButtonToolbar>
      </CForm>
    </ValueProvider>
  );
};

export default Edit;
