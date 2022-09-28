import React from "react";
import { CFormInput, CButton, CForm, CCol } from "@coreui/react";
import { useNavigate, useLocation } from "react-router-dom";

const Show = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selling = location.state.selling;

  return (
    <CForm className="row g-3">
      <CCol xs={12}>
        <CButton
          onClick={() => {
            navigate("/pages/forms/selling");
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
          value={selling.buying_order_id}
          label="Contract No."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          value={selling.transit_company_id}
          label="transit id"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          value={selling.company_id}
          label="companies"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="text"
          label="Transit Agent"
          name="transit_agent"
          value={selling.transit_agent || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Booking"
          name="booking"
          value={selling.booking || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          label="Shipping Correspondence"
          name="shipping_correspondence"
          value={selling.shipping_correspondence || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          label="Send Package to Client"
          name="send_package_to_client"
          value={selling.send_package_to_client || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          label="Invoice Status"
          name="invoice_status"
          value={selling.invoice_status || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          inline
          label="Announce Booking"
          name="announce_booking"
          value={selling.announce_booking || ""}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Claim"
          name="claim"
          value={selling.claim || ""}
        />
      </CCol>
    </CForm>
  );
};

export default Show;
