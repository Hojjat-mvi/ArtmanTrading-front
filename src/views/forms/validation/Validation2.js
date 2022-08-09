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
          label="buying_order_id"
          name="buying_order_id"
        />
      </CCol>
      <CCol md={4}>
        <CFormInput type="number" label="number" name="number" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="date" label="loading_date" name="loading_date" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="origin_weight" name="origin_weight" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="date" label="departure_date" name="departure_date" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="first_weight" name="first_weight" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="second_weight" name="second_weight" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="sealed_weight" name="sealed_weight" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="text" label="pod" name="pod" />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="text" label="bundle" name="bundle" />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="seller_net_weight"
          name="seller_net_weight"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="buyer_net_weight"
          name="buyer_net_weight"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="container_number"
          name="container_number"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="number" label="seal_number" name="seal_number" />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="fixed_seller_lme_price"
          name="fixed_seller_lme_price"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="fixed_seller_lme_price"
          name="fixed_seller_lme_price"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="date"
          label="fixed_buyer_lme_price_date"
          name="fixed_buyer_lme_price_date"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput type="date" label="lme_fixed_date" name="lme_fixed_date" />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="date"
          label="lme_expiration_date"
          name="lme_expiration_date"
        />
      </CCol>
    </CForm>
  );
};
