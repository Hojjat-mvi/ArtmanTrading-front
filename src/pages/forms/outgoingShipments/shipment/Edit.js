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

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const shipment = location.state.shipment;

  const [values, setValues] = useState(shipment);
  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setValues({
      ...values,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    });
  };

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
          <p>Cutomer Agent Invoice Status</p>
          <CFormCheck
            inline
            label="Recorded"
            name="custom_agent_invoice_status"
            onChange={handleInputChange}
            checked={values.custom_agent_invoice_status || ""}
          />
          <CFormCheck
            inline
            label="Paid"
            name="custom_agent_invoice_status"
            onChange={handleInputChange}
            checked={values.custom_agent_invoice_status || ""}
          />
        </CCol>
        <CCol xs={4}>
          <p>Submition</p>
          <CFormCheck
            inline
            label="Announced"
            name="submit"
            onChange={handleInputChange}
            checked={values.submit || ""}
          />
          <CFormCheck
            inline
            label="Delievered"
            name="submit"
            onChange={handleInputChange}
            checked={values.submit || ""}
          />
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
