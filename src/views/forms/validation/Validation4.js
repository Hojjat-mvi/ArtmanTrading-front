import { CForm, CFormInput, CCol } from "@coreui/react";
import React from "react";

export const Validation4 = () => {
  const initialValues4 = {
    buying_order_id: "",
    
  };
  return (
    <div>
      <CForm className="row g-3">
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Buying Order ID"
            name="buying_order_id"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput type="number" label="Buyer" name="company_id" />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Transit Company"
            name="transit_company_id"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Transit Agent"
            name="transit_agent"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput type="number" label="Booking" name="booking" />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Shipping Correspondence"
            name="shipping_correspondence"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Announce Booking"
            name="announce_booking"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Send Package to Client"
            name="send_package_to_client"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Invoice Status"
            name="invoice_status"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Cargos_Statement"
            name="cargos_statement"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput type="number" label="Claim" name="claim" />
        </CCol>
      </CForm>
    </div>
  );
};
