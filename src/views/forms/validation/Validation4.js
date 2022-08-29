import { React, useEffect, useState } from "react";
import {
  CForm,
  CFormInput,
  CCol,
  CButton,
  CButtonToolbar,
  CSpinner,
} from "@coreui/react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

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
  // eslint-disable-next-line no-debugger
  const SubmitHandler = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = axios.post(
        "http://localhost:8000/api/buying-orders",
        secondState,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const buyingOrderId = (await response).data.data.id;
      console.log(buyingOrderId);
      if (!buyingOrderId) {
        return <CSpinner color="primary" />;
      }
      axios.post(
        `http://localhost:8000/api/buying-orders/${buyingOrderId}/incoming-shipments`,
        firstState,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      axios.post(
        `http://localhost:8000/api/buying-orders/${buyingOrderId}/outgoing-shipments`,
        thirdState,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      axios.post(
        `http://localhost:8000/api/buying-orders/${buyingOrderId}/selling-orders`,
        values,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("data saved successfully");
    } catch (e) {
      toast.error("can not send data");
      console.log(e.message);
    }
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
