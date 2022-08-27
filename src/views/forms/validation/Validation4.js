import {
  CForm,
  CFormInput,
  CCol,
  CButton,
  CButtonToolbar,
} from "@coreui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const Validation4 = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const SubmitHandler = async (event) => {
    event.preventDefault();
    // POST
  };
  return (
    <div>
      <CForm className="row g-3">
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
    </div>
  );
};
