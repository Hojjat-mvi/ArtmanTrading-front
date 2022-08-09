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
          label="buying_order_id"
          name="buying_order_id"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="number" name="number" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="to_port" name="to_port" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="analysis" name="analysis" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="process" name="process" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="pic" name="pic" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="seal_pic" name="seal_pic" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="submit" name="submit" />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="text"
          label="thc_accounting_approval_text"
          name="thc_accounting_approval_text"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="thc_accounting_approval"
          name="thc_accounting_approval"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="custom_agent_invoice_status"
          name="custom_agent_invoice_status"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="custom_agent_invoice_currency"
          name="custom_agent_invoice_currency"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="custom_agent_invoice_amount"
          name="custom_agent_invoice_amount"
        />
      </CCol>
    </CForm>
  );
};
