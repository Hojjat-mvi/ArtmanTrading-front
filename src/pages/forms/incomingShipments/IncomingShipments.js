import { React, useState } from "react";
import {
  CCol,
  CForm,
  CFormInput,
  CButtonToolbar,
  CButton,
  CFormLabel,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { ValueProvider } from "src/context/valueContext";
import Options from "src/components/Options";

const IncomingShipments = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(false);
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
      try {
        const res = await axios.post(
          `http://localhost:8000/api/incoming-shipments`,
          values,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (res.status === 201) {
          toast.success("form saved");
          navigate("/pages/forms/shipments");
        } else {
          toast.error("error");
        }
      } catch (e) {
        toast.error(e.message);
      }
    }
  };


  return (
    // Incoming shipment
    <ValueProvider
      value={{
        values: values,
        onValueChange: (value, name) => setValues({ ...values, [name]: value }),
      }}
    >
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
            shape="rounded-pill"
            style={{ marginBottom: "10px" }}
          >
            Back
          </CButton>
        </CCol>
        <CCol md={4}>
          <CFormLabel>Contract No.</CFormLabel>
          <Options
            url={"buying-orders"}
            Data={values}
            name={"buying_order_id"}
          />
        </CCol>
        <CCol md={4}>
          <CFormInput
            type="number"
            label="Number"
            name="number"
            onChange={handleInputChange}
            value={values.number || ""}
            placeholder="Enter number..."
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="date"
            label="Loading Date"
            name="loading_date"
            onChange={handleInputChange}
            value={values.loading_date || ""}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Origin Weight"
            name="origin_weight"
            onChange={handleInputChange}
            value={values.origin_weight || ""}
            placeholder="Weight in KG"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="date"
            label="Departure Date"
            name="departure_date"
            onChange={handleInputChange}
            value={values.departure_date || ""}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="First Weight"
            name="first_weight"
            onChange={handleInputChange}
            value={values.first_weight || ""}
            placeholder="Weight in KG"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Second Weight"
            name="second_weight"
            onChange={handleInputChange}
            value={values.second_weight || ""}
            placeholder="Weight in KG"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Sealed Weight"
            name="sealed_weight"
            onChange={handleInputChange}
            value={values.sealed_weight || ""}
            placeholder="Weight in KG"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="POD"
            name="pod"
            onChange={handleInputChange}
            value={values.pod || ""}
            placeholder="Enter number..."
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Bundle"
            name="bundle"
            onChange={handleInputChange}
            value={values.bundle || ""}
            placeholder="Enter number..."
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Seller Net Weight"
            onChange={handleInputChange}
            value={values.seller_net_weight || ""}
            name="seller_net_weight"
            placeholder="Weight in KG"
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Buyer Net Weight"
            name="buyer_net_weight"
            value={values.buyer_net_weight || ""}
            placeholder="Weight in KG"
            onChange={handleInputChange}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            onChange={handleInputChange}
            label="Container Number"
            name="container_number"
            placeholder="Enter number..."
            value={values.container_number || ""}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            onChange={handleInputChange}
            type="number"
            label="Seal Number"
            name="seal_number"
            placeholder="Enter number..."
            value={values.seal_number || ""}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Fixed Seller LME Price"
            onChange={handleInputChange}
            name="fixed_seller_lme_price"
            placeholder="Enter price..."
            value={values.fixed_seller_lme_price || ""}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="number"
            label="Fixed Buyer LME Price"
            onChange={handleInputChange}
            name="fixed_buyer_lme_price"
            placeholder="Enter price..."
            value={values.fixed_buyer_lme_price || ""}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="date"
            label="Fixed Buyer LME Price Date"
            onChange={handleInputChange}
            name="fixed_buyer_lme_price_date"
            value={values.fixed_buyer_lme_price_date || ""}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="date"
            label="LME Fixed Date"
            onChange={handleInputChange}
            name="lme_fixed_date"
            value={values.lme_fixed_date || ""}
          />
        </CCol>
        <CCol xs={4}>
          <CFormInput
            type="date"
            label="LME Expiration Date"
            onChange={handleInputChange}
            name="lme_expiration_date"
            value={values.lme_expiration_date || ""}
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
    </ValueProvider>
  );
};
export default IncomingShipments;
