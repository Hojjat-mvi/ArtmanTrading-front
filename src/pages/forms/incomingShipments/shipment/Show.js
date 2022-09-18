import React from 'react'
import { CForm, CCol, CFormInput } from "@coreui/react";
import { useLocation } from "react-router-dom";


const Show = () => {

    const location = useLocation()

    const shipment = location.state.shipment

  return (
    <CForm className="row g-3 needs-validation" noValidate>
      <CCol md={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Number"
          name="number"
          value={shipment.number}
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="date"
          label="Loading Date"
          name="loading_date"
          value={shipment.loading_date}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Origin Weight"
          name="origin_weight"
          value={shipment.origin_weight}
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="date"
          label="Departure Date"
          name="departure_date"
          value={shipment.departure_date}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="First Weight"
          name="first_weight"
          value={shipment.first_weight}
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Second Weight"
          name="second_weight"
          value={shipment.second_weight}
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Sealed Weight"
          name="sealed_weight"
          value={shipment.sealed_weight}
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="POD"
          name="pod"
          value={shipment.pod}
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Bundle"
          name="bundle"
          value={shipment.bundle}
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Seller Net Weight"
          name="seller_net_weight"
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Buyer Net Weight"
          name="buyer_net_weight"
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Container Number"
          name="container_number"
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Seal Number"
          name="seal_number"
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Fixed Seller LME Price"
          name="fixed_seller_lme_price"
          placeholder="Enter price..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Fixed Buyer LME Price"
          name="fixed_buyer_lme_price"
          placeholder="Enter price..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="date"
          label="Fixed Buyer LME Price Date"
          name="fixed_buyer_lme_price_date"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="date"
          label="LME Fixed Date"
          name="lme_fixed_date"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="date"
          label="LME Expiration Date"
          name="lme_expiration_date"
          style={{ marginBottom: "10px" }}
        />
      </CCol>
    </CForm>
  )
}

export default Show