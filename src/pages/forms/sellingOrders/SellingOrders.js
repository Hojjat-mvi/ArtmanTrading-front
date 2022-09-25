import { React, useState } from "react";
import {
  CForm,
  CFormInput,
  CCol,
  CButton,
  CButtonToolbar,
  CFormSelect,
  CFormCheck,
} from "@coreui/react";
import Options from "src/components/Options";
import { toast } from "react-toastify";
import axios from "axios";

const SellingOrders = () => {
  // const location = useLocation();

  const [values, setValues] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // eslint-disable-next-line no-debugger
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:8000/api/selling-orders", values, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (e) {
      toast.error(e.message);
    }
  };
  console.log(values);
  return (
    // selling-orders
    <div>
      <CForm className="row g-3">
        <CCol xs={4}>
          <CFormSelect
            label="Customer"
            name="company_id"
            onChange={handleInputChange}
            value={values.company_id}
          >
            <Options url={"transit-companies"} />
          </CFormSelect>
        </CCol>
        <CCol xs={4}>
          <CFormSelect
            label="Transit Company"
            name="transit_company_id"
            onChange={handleInputChange}
            value={values.transit_company_id}
          >
            <Options url={"transit-companies"} />
          </CFormSelect>
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="text"
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
          <CFormCheck
            label="Shipping Correspondence"
            name="shipping_correspondence"
            onChange={handleInputChange}
            checked={values.shipping_correspondence}
          />
          <CFormCheck
            label="Send Package to Client"
            name="send_package_to_client"
            onChange={handleInputChange}
            checked={values.send_package_to_client}
          />
          <CFormCheck
            label="Invoice Status"
            name="invoice_status"
            onChange={handleInputChange}
            checked={values.invoice_status}
          />
        </CCol>
        <CCol xs={4}>
          <p>Announce Booking</p>
          <CFormCheck
            inline
            label="B"
            name="announce_booking"
            onChange={handleInputChange}
            checked={values.announce_booking}
          />
          <CFormCheck
            inline
            label="1"
            name="announce_booking"
            onChange={handleInputChange}
            checked={values.announce_booking}
          />
          <CFormCheck
            inline
            label="2"
            name="announce_booking"
            onChange={handleInputChange}
            checked={values.announce_booking}
          />
          <CFormCheck
            inline
            label="3"
            name="announce_booking"
            onChange={handleInputChange}
            checked={values.announce_booking}
          />
          <CFormCheck
            inline
            label="4"
            name="announce_booking"
            onChange={handleInputChange}
            checked={values.announce_booking}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Cargo Statement"
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
export default SellingOrders;
