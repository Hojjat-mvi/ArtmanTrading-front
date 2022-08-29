import { React, useEffect, useState } from "react";
import {
  CForm,
  CFormInput,
  CCol,
  CButton,
  CButtonToolbar,
} from "@coreui/react";
import { useLocation, useNavigate } from "react-router-dom";

export const Validation4 = () => {
  const location = useLocation();

  const [firstState, setFirstState] = useState(location.state.firstState);
  const [secondState, setSecondState] = useState(location.state.secondState);
  const [thirdState, setThirdState] = useState(location.state.values);
  const [values, setValues] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const Navigate = useNavigate();

  console.log(firstState);
  console.log(secondState);
  console.log(thirdState);

  const SubmitHandler = async (event) => {
    event.preventDefault();
    // POST
  };
  return (
    <div>
      <CForm className="row g-3">
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Buyer"
            name="company_id"
            onChange={handleInputChange}
            value={values.company_id}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Transit Company"
            name="transit_company_id"
            onChange={handleInputChange}
            value={values.transit_company_id}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Transit Agent"
            name="transit_agent"
            onChange={handleInputChange}
            value={values.transit_agent}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Booking"
            name="booking"
            onChange={handleInputChange}
            value={values.booking}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Shipping Correspondence"
            name="shipping_correspondence"
            onChange={handleInputChange}
            value={values.shipping_correspondence}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Announce Booking"
            name="announce_booking"
            onChange={handleInputChange}
            value={values.announce_booking}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Send Package to Client"
            name="send_package_to_client"
            onChange={handleInputChange}
            value={values.send_package_to_client}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Invoice Status"
            name="invoice_status"
            onChange={handleInputChange}
            value={values.invoice_status}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Cargos_Statement"
            name="cargos_statement"
            onChange={handleInputChange}
            value={values.cargos_statement}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Claim"
            name="claim"
            onChange={handleInputChange}
            value={values.claim}
          />
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
