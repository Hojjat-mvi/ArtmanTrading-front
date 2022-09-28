import { React, useState } from "react";
import {
  CForm,
  CFormInput,
  CCol,
  CButton,
  CButtonToolbar,
  CFormCheck,
  CFormLabel,
} from "@coreui/react";
import Options from "src/components/Options";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ValueProvider } from "src/context/valueContext";

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selling = location.state.selling

  const [values, setValues] = useState(selling);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    });
  };

  // eslint-disable-next-line no-debugger
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(
        `http://localhost:8000/api/selling-orders/${selling.id}`,
        values,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 200) {
        toast.success("form saved");
        navigate("/pages/forms/selling");
        console.log(values);
      } else {
        console.log(values);
        toast.error("error");
      }
    } catch (e) {
      console.log(values);
      toast.error(e.message);
    }
  };

  return (
    // selling-orders
    <>
      <ValueProvider
        value={{
          values: values,
          onValueChange: (value, name) =>
            setValues({ ...values, [name]: value }),
        }}
      >
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
            <CFormLabel>Contract No.</CFormLabel>
            <Options
              url={"buying-orders"}
              Data={values.buying_order_id}
              name={"buying_order_id"}
            />
          </CCol>
          <CCol xs={4}>
            <CFormLabel>transit id</CFormLabel>
            <Options
              url={"transit-companies"}
              Data={values.transit_company_id}
              name={"transit_company_id"}
            />
          </CCol>
          <CCol xs={4}>
            <CFormLabel>Companies</CFormLabel>
            <Options url={"companies"} Data={values.company_id} name={"company_id"} />
          </CCol>
          <CCol xs={4}>
            <CFormInput
              type="text"
              label="Transit Agent"
              name="transit_agent"
              onChange={handleInputChange}
              value={values.transit_agent || ""}
            />
          </CCol>
          <CCol xs={4}>
            <CFormInput
              type="number"
              label="Booking"
              name="booking"
              onChange={handleInputChange}
              value={values.booking || ""}
            />
          </CCol>
          <CCol xs={4}>
            <CFormCheck
              label="Shipping Correspondence"
              name="shipping_correspondence"
              onChange={handleInputChange}
              checked={values.shipping_correspondence || ""}
            />
            <CFormCheck
              label="Send Package to Client"
              name="send_package_to_client"
              onChange={handleInputChange}
              checked={values.send_package_to_client || ""}
            />
            <CFormCheck
              label="Invoice Status"
              name="invoice_status"
              onChange={handleInputChange}
              checked={values.invoice_status || ""}
            />
          </CCol>
          <CCol xs={4}>
            <p>Announce Booking</p>
            <CFormCheck
              inline
              label="B"
              name="announce_booking"
              onChange={handleInputChange}
              checked={values.announce_booking || ""}
            />
            <CFormCheck
              inline
              label="1"
              name="announce_booking"
              onChange={handleInputChange}
              checked={values.announce_booking || ""}
            />
            <CFormCheck
              inline
              label="2"
              name="announce_booking"
              onChange={handleInputChange}
              checked={values.announce_booking || ""}
            />
            <CFormCheck
              inline
              label="3"
              name="announce_booking"
              onChange={handleInputChange}
              checked={values.announce_booking || ""}
            />
            <CFormCheck
              inline
              label="4"
              name="announce_booking"
              onChange={handleInputChange}
              checked={values.announce_booking || ""}
            />
          </CCol>
          <CCol xs={4}>
            <CFormInput
              type="number"
              label="Cargo Statement"
              name="cargos_statement"
              onChange={handleInputChange}
              value={values.cargos_statement || ""}
            />
          </CCol>
          <CCol xs={4}>
            <CFormInput
              type="number"
              label="Claim"
              name="claim"
              onChange={handleInputChange}
              value={values.claim || ""}
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
      </ValueProvider>
    </>
  );
};

export default Edit;
