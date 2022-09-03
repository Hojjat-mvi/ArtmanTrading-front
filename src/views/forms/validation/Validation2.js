import { React, useState } from "react";
import {
  CCol,
  CForm,
  CFormInput,
  CButtonToolbar,
  CButton,
} from "@coreui/react";
import { useLocation, useNavigate } from "react-router-dom";

export const Validation2 = () => {
  const [values, setValues] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const Navigate = useNavigate();
  const location = useLocation();

  const [firstState] = useState(location.state.values);

  const SubmitHandler = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
      event.preventDefault();
      Navigate("/forms/Validation3", { state: { values, firstState } });
    }
  };

  return (
    // Incoming shipment
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={SubmitHandler}
    >
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
          name="seller_net_weight"
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Buyer Net Weight"
          name="buyer_net_weight"
          placeholder="Weight in KG"
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Container Number"
          name="container_number"
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Seal Number"
          name="seal_number"
          placeholder="Enter number..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Fixed Seller LME Price"
          name="fixed_seller_lme_price"
          placeholder="Enter price..."
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Fixed Buyer LME Price"
          name="fixed_buyer_lme_price"
          placeholder="Enter price..."
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
            Next
          </CButton>
        </CCol>
      </CButtonToolbar>
    </CForm>
  );
};
