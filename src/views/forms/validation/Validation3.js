import { CForm, CFormInput, CCol } from "@coreui/react";
import React from "react";

export const Validation3 = () => {
  const initialValues3 = {
    buying_order_id: "",
    number: "",
    to_port: "",
    analysis: "",
    process: "",
    pic: "",
    seal_pic: "",
    submit: "",
    thc_accounting_approval_text: "",
    thc_accounting_approval: "",
    custom_agent_invoice_status: "",
    custom_agent_invoice_currency: "",
    custom_agent_invoice_amount: "",
  };
  return (
    <CForm className="row g-3">
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Buying Order ID"
          name="buying_order_id"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="Number" name="number" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="To Port" name="to_port" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="Analysis" name="analysis" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="Process" name="process" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="Picture" name="pic" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="Seal Picture" name="seal_pic" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="Submit" name="submit" />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="text"
          label="THC Accounting Approval Text"
          name="thc_accounting_approval_text"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="THC Accounting Approval"
          name="thc_accounting_approval"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Custom Agent Invoice Status"
          name="custom_agent_invoice_status"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Custom Agent Invoice Currency"
          name="custom_agent_invoice_currency"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Custom Agent Invoice Amount"
          name="custom_agent_invoice_amount"
        />
      </CCol>
    </CForm>
  );
};
