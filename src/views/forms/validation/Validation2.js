import { CCol, CForm, CFormInput } from "@coreui/react";
import React from "react";

export const Validation2 = () => {
  const initialValues2 = {
    buying_order_id: "",
    number: "",
    loading_date: "",
    origin_weight: "",
    departure_date: "",
    first_weight: "",
    second_weight: "",
    sealed_weight: "",
    pod: "",
    bundle: "",
    seller_net_weight: "",
    buyer_net_weight: "",
    container_number: "",
    seal_number: "",
    fixed_seller_lme_price: "",
    fixed_buyer_lme_price: "",
    fixed_buyer_lme_price_date: "",
    lme_fixed_date: "",
    lme_expiration_date: "",
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
      <CCol md={4}>
        <CFormInput type="number" label="Number" name="number" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="date" label="Loading Date" name="loading_date" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="Origin Weight" name="origin_weight" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="date" label="Departure Date" name="departure_date" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="First Weight" name="first_weight" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="Second Weight" name="second_weight" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="Sealed Weight" name="sealed_weight" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="text" label="POD" name="pod" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="text" label="Bundle" name="bundle" />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Seller Net Weight"
          name="seller_net_weight"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Buyer Net Weight"
          name="buyer_net_weight"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Container Number"
          name="container_number"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="seal_number" name="seal_number" />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Fixed Seller LME Price"
          name="fixed_seller_lme_price"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Fixed Buyer LME Price"
          name="fixed_buyer_lme_price"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="date"
          label="Fixed Buyer LME Price Date"
          name="fixed_buyer_lme_price_date"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="date" label="LME Fixed Date" name="lme_fixed_date" />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="date"
          label="LME Expiration Date"
          name="lme_expiration_date"
        />
      </CCol>
    </CForm>
  );
};
