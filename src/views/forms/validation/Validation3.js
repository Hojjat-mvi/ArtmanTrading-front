import {
  CForm,
  CFormInput,
  CCol,
  CButton,
  CButtonToolbar,
} from "@coreui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Validation3 = () => {
  const location = useLocation();
  const Navigate = useNavigate();

  const SubmitHandler = async (event) => {
    event.preventDefault();
    Navigate("/forms/Validation4", { state: { values } });
  };

  return (
    <CForm className="row g-3">
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
      </CButtonToolbar>
    </CForm>
  );
};
