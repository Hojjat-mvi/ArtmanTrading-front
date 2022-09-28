import {
  CCol,
  CForm,
  CFormInput,
  CButtonToolbar,
  CButton,
} from "@coreui/react";
import { useState } from "react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const shipment = location.state.shipment;

  const [values, setValues] = useState(shipment);
  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const SubmitHandler = async (event) => {
    const form = event.currentTarget;
    const token = localStorage.getItem("token");
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
      event.preventDefault();
    }
    try {
      await axios.put(
        `http://localhost:8000/api/incoming-shipments/${shipment.buying_order_id}`,
        values,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("order changed");
    } catch (e) {
      toast.error(e.message);
    }
  };
  console.log(shipment);
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={SubmitHandler}
    >
      <CCol xs={12}>
        <CButton
          onClick={() => {
            navigate("/pages/forms/shipments");
          }}
          style={{ marginBottom: "10px" }}
        >
          Back
        </CButton>
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="number"
          label="Number"
          name="number"
          onChange={handleInputChange}
          value={values.number}
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="date"
          label="Loading Date"
          name="loading_date"
          onChange={handleInputChange}
          value={values.loading_date}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Origin Weight"
          name="origin_weight"
          onChange={handleInputChange}
          value={values.origin_weight}
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="date"
          label="Departure Date"
          name="departure_date"
          onChange={handleInputChange}
          value={values.departure_date}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="First Weight"
          name="first_weight"
          onChange={handleInputChange}
          value={values.first_weight}
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Second Weight"
          name="second_weight"
          onChange={handleInputChange}
          value={values.second_weight}
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Sealed Weight"
          name="sealed_weight"
          onChange={handleInputChange}
          value={values.sealed_weight}
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="POD"
          name="pod"
          onChange={handleInputChange}
          value={values.pod}
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Bundle"
          name="bundle"
          onChange={handleInputChange}
          value={values.bundle}
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Seller Net Weight"
          onChange={handleInputChange}
          name="seller_net_weight"
          value={values.seller_net_weight}
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Buyer Net Weight"
          onChange={handleInputChange}
          name="buyer_net_weight"
          value={values.buyer_net_weight}
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Container Number"
          name="container_number"
          value={values.container_number}
          onChange={handleInputChange}
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Seal Number"
          name="seal_number"
          value={values.seal_number}
          onChange={handleInputChange}
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Fixed Seller LME Price"
          name="fixed_seller_lme_price"
          value={values.fixed_seller_lme_price}
          onChange={handleInputChange}
          placeholder="Enter price..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Fixed Buyer LME Price"
          name="fixed_buyer_lme_price"
          value={values.fixed_buyer_lme_price}
          onChange={handleInputChange}
          placeholder="Enter price..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="date"
          label="Fixed Buyer LME Price Date"
          name="fixed_buyer_lme_price_date"
          value={values.fixed_buyer_lme_price_date}
          onChange={handleInputChange}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="date"
          label="LME Fixed Date"
          name="lme_fixed_date"
          value={values.lme_fixed_date}
          onChange={handleInputChange}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="date"
          onChange={handleInputChange}
          label="LME Expiration Date"
          name="lme_expiration_date"
          value={values.lme_expiration_date}
          style={{ marginBottom: "10px" }}
        />
      </CCol>
      <CButtonToolbar className="mb-3">
        <CCol>
          <CButton
            style={{ marginBottom: "5px" }}
            type="submit"
            color="primary"
          >
            submit
          </CButton>
        </CCol>
      </CButtonToolbar>
    </CForm>
  );
};
export default Edit;
