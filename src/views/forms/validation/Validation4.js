import { CForm, CFormInput, CCol } from "@coreui/react";
import React from "react";

export const Validation4 = () => {
  const initialValues4 = {
    buying_order_id: "",
    company_id: "",
    transit_company_id: "",
    transit_agent: "",
    booking: "",
    shipping_correspondence: "",
    announce_booking: "",
    send_package_to_client: "",
    invoice_status: "",
    cargos_statement: "",
    claim: "",
  };
  return (
    <div>
      <CForm className="row g-3">
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="buying_order_id"
            name="buying_order_id"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput type="number" label="company_id" name="company_id" />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="transit_company_id"
            name="transit_company_id"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="transit_agent"
            name="transit_agent"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput type="number" label="booking" name="booking" />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="shipping_correspondence"
            name="shipping_correspondence"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="announce_booking"
            name="announce_booking"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="send_package_to_client"
            name="send_package_to_client"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="invoice_status"
            name="invoice_status"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="cargos_statement"
            name="cargos_statement"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput type="number" label="claim" name="claim" />
        </CCol>
      </CForm>
    </div>
  );
};
