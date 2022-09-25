import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CForm, CCol, CFormInput, CButton } from "@coreui/react";

const Show = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state.order;

  return (
    <CForm className="row g-3">
      <CCol xs={12}>
        <CButton
          onClick={() => {
            navigate("/pages/orders");
          }}
          shape="rounded-pill"
          style={{ marginBottom: "10px" }}
        >
          Back
        </CButton>
      </CCol>
      {/*buying-orders-table*/}
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="text"
          label="Company"
          name="company_id"
          value={order.company_id}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="text"
          label="Material"
          name="material_id"
          value={order.material_id}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="text"
          label="Exchange"
          name="exchange_id"
          value={order.exchange_id}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="text"
          label="Agent"
          name="agent_id"
          value={order.agent_id}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="date"
          label="Purchase Date"
          name="date_of_purchase"
          value={order.date_of_purchase}
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          readOnly
          plainText
          type="text"
          label="Contract No."
          name="contract_no"
          value={order.contract_no}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          feedbackInvalid="Please select a valid id."
          id="company_id"
          label="Seller"
          name="company_id"
          required
          tooltipFeedback
          value={order.company_id}
        ></CFormInput>
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          feedbackInvalid="Please select a valid id."
          id="material_id"
          label="Material"
          name="material_id"
          required
          tooltipFeedback
          value={order.material_id}
        ></CFormInput>
      </CCol>
      <CCol md={4}>
        <CFormInput
          readOnly
          plainText
          feedbackInvalid="Please select a valid id."
          id="analysis"
          label="Analysis"
          name="analysis"
          required
          tooltipFeedback
          value={order.analysis}
        ></CFormInput>
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Quantity"
          name="quantity"
          value={order.quantity}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Packaging Weight"
          name="packaging_weight"
          value={order.packaging_weight}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          feedbackInvalid="Please select a valid id."
          id="container_size"
          label="Container Size"
          name="container_size"
          required
          tooltipFeedback
          value={order.container_size}
        ></CFormInput>
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          feedbackInvalid="Please select a valid id."
          id="packaging_style"
          label="Packaging Style"
          name="packaging_style"
          required
          tooltipFeedback
          value={order.packaging_style}
        ></CFormInput>
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          type="number"
          label="Selling Price"
          name="selling_price"
          value={order.selling_price}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          readOnly
          plainText
          feedbackInvalid="Please select a valid id."
          id="term"
          label="Term"
          name="term"
          required
          tooltipFeedback
          value={order.term}
        ></CFormInput>
      </CCol>

      <CCol md={12}>
        <CFormInput
          readOnly
          plainText
          type="text"
          label="Analysis Result"
          name="analysis_result"
          value={order.analysis_result}
        />
      </CCol>
      <CCol xs={12}>
        {" "}
        {/* textarea */}
        <CFormInput
          readOnly
          plainText
          type="text"
          label="Notes"
          name="notes"
          value={order.notes}
        />
      </CCol>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <CCol xs={12}>
        <p>Sending Docs to Seller</p>
        <CFormCheck name="checks" value="1" label="1" checked={sdts1} />
        <CFormCheck name="checks" value="2" label="2" checked={sdts2} />
        <CFormCheck name="checks" value="3" label="3" checked={sdts3} />
      </CCol>

      <CCol xs={12}>
        <p>Certificate of Origin</p>
        <CFormCheck
          name="certificate_of_origin"
          value="1"
          label="1"
          checked={coo1}
        />
        <CFormCheck name="coo" value="2" label="2" checked={coo2} />
        <CFormCheck name="coo" value="3" label="3" checked={coo3} />
      </CCol> */}
    </CForm>
  );
};

export default Show;
