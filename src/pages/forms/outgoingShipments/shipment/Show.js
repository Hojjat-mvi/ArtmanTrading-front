import React from "react";
import {
  CForm,
  CCol,
  CButton,
  CFormInput,
  CButtonToolbar,
} from "@coreui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Show = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const shipment = location.state.shipment;

  console.log(shipment);

  return (
    <CForm className="row g-3 needs-validation" noValidate>
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
        <CFormInput
          readOnly
          plainText
          label="Contract No."
          value={shipment.buying_order_id}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Number"
          name="number"
          value={shipment.number || ""}
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          inline
          label="Recorded"
          name="custom_agent_invoice_status"
          value={shipment.custom_agent_invoice_status || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          inline
          label="Paid"
          name="custom_agent_invoice_status"
          value={shipment.custom_agent_invoice_status || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          inline
          label="Announced"
          name="submit"
          value={shipment.submit || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          inline
          label="Delievered"
          name="submit"
          value={shipment.submit || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="text"
          label="THC Accounting Approval Text"
          name="thc_accounting_approval_text"
          value={shipment.thc_accounting_approval_text || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          label="Custom Agent Invoice Currency"
          name="custom_agent_invoice_currency"
          value={shipment.custom_agent_invoice_currency || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Custom Agent Invoice Amount"
          name="custom_agent_invoice_amount"
          value={shipment.custom_agent_invoice_amount || ""}
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          label="To Port"
          name="to_port"
          value={shipment.to_port || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          label="Analysis"
          name="analysis"
          value={shipment.analysis || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          label="Process"
          name="process"
          value={shipment.process || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          label="Picture"
          name="pic"
          value={shipment.pic || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          label="Seal Picture"
          name="seal_pic"
          value={shipment.seal_pic || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          label="THC Accounting Approval"
          name="thc_accounting_approval"
          value={shipment.thc_accounting_approval || ""}
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
  );
};

export default Show;
