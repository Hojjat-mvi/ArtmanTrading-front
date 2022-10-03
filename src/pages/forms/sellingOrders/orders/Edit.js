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
import { Announce_Booking } from "../utils/toppings";

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selling = location.state.selling;

  var announceCheck = selling.announce_booking.toString().split("");
  var announceIsCheck = [];
  // if (selling.announce_booking < 1 && announceCheck.length < 4) {
  //   announceCheck.unshift("0");
  //   announceCheck.unshift("0");
  //   announceCheck.unshift("0");
  //   announceCheck.unshift("0");
  // }
  if (selling.announce_booking < 10 && announceCheck.length < 5) {
    announceCheck.unshift("0");
    announceCheck.unshift("0");
    announceCheck.unshift("0");
    announceCheck.unshift("0");
  }
  if (selling.announce_booking < 100 && announceCheck.length < 5) {
    announceCheck.unshift("0");
    announceCheck.unshift("0");
    announceCheck.unshift("0");
  }
  if (selling.announce_booking < 1000 && announceCheck.length < 5) {
    announceCheck.unshift("0");
    announceCheck.unshift("0");
  }
  if (selling.announce_booking < 10000 && announceCheck.length < 5) {
    announceCheck.unshift("0");
  }

  announceCheck[0] === "0"
    ? (announceIsCheck[0] = false)
    : (announceIsCheck[0] = true);
  announceCheck[1] === "0"
    ? (announceIsCheck[1] = false)
    : (announceIsCheck[1] = true);
  announceCheck[2] === "0"
    ? (announceIsCheck[2] = false)
    : (announceIsCheck[2] = true);
  announceCheck[3] === "0"
    ? (announceIsCheck[3] = false)
    : (announceIsCheck[3] = true);
  announceCheck[4] === "0"
    ? (announceIsCheck[4] = false)
    : (announceIsCheck[4] = true);

  const [values, setValues] = useState(selling);
  const [announceBooking, setAnnounceBooking] = useState(announceIsCheck);

  const handleAnnounce = (position) => {
    setAnnounceBooking(new Array(Announce_Booking.length).fill(false));

    const updated = announceBooking.map((item, index) =>
      index === position ? !item : item
    );

    setAnnounceBooking(updated);

    const result = updated.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + Announce_Booking[index].value;
      }
      return sum;
    }, 0);

    setValues({
      ...values,
      announce_booking: result,
    });
  };

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

  console.log(values.announce_booking);

  return (
    // selling-sellings
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
            <Options
              url={"companies"}
              Data={values.company_id}
              name={"company_id"}
            />
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
            {Announce_Booking.map(({ label }, index) => {
              return (
                <CFormCheck
                  key={index}
                  inline
                  type="checkbox"
                  label={label}
                  checked={announceBooking[index]}
                  onChange={() => handleAnnounce(index)}
                />
              );
            })}
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
