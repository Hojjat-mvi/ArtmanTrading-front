import { CCol, CForm, CFormInput } from "@coreui/react";
import React from "react";

export const Validation2 = () => {
  const initialValues2 = {
    buying_order_id:"",
    number:"",
    loading_date:"",
    origin_weight:"",
    departure_date:"",
    first_weight:"",
    second_weight:"",
    sealed_weight:"",
    pod:"",
    bundle:"",
    seller_net_weight:"",
    buyer_net_weight:"",
    container_number:"",
    seal_number:"",
    fixed_seller_lme_price:"",
    fixed_buyer_lme_price:"",
    fixed_buyer_lme_price_date:"",
    lme_fixed_date:"",
    lme_expiration_date:"",
  };

  return (
    <CForm>
      <CCol xs={6}>
        <CFormInput placeholder="hiiii" />
      </CCol>
    </CForm>
  );
};
