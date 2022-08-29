import { React, useEffect, useState } from "react";
import {
  CForm,
  CFormInput,
  CCol,
  CButton,
  CButtonToolbar,
} from "@coreui/react";
import { useLocation, useNavigate } from "react-router-dom";

export const Validation3 = () => {
  const location = useLocation();
  const [values, setValues] = useState(false);
  const [secondState, setSecondState] = useState(location.state.firstState);
  const [firstState, setFirst] = useState(location.state.values);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const Navigate = useNavigate();

  const SubmitHandler = async (event) => {
    event.preventDefault();
    Navigate("/forms/Validation4", {
      state: { values, firstState, secondState },
    });
  };  

  return (
    <CForm className="row g-3">
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Number"
          name="number"
          onChange={handleInputChange}
          value={values.number}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="To Port"
          name="to_port"
          onChange={handleInputChange}
          value={values.to_port}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Analysis"
          name="analysis"
          onChange={handleInputChange}
          value={values.analysis}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Process"
          name="process"
          onChange={handleInputChange}
          value={values.process}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Picture"
          name="pic"
          onChange={handleInputChange}
          value={values.pic}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Seal Picture"
          name="seal_pic"
          onChange={handleInputChange}
          value={values.seal_pic}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Submit"
          name="submit"
          onChange={handleInputChange}
          value={values.submit}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="text"
          label="THC Accounting Approval Text"
          name="thc_accounting_approval_text"
          onChange={handleInputChange}
          value={values.thc_accounting_approval_text}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="THC Accounting Approval"
          name="thc_accounting_approval"
          onChange={handleInputChange}
          value={values.thc_accounting_approval}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Custom Agent Invoice Status"
          name="custom_agent_invoice_status"
          onChange={handleInputChange}
          value={values.custom_agent_invoice_status}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Custom Agent Invoice Currency"
          name="custom_agent_invoice_currency"
          onChange={handleInputChange}
          value={values.custom_agent_invoice_currency}
        />
      </CCol>
      <CCol xs={4}>
        <CFormInput
          type="number"
          label="Custom Agent Invoice Amount"
          name="custom_agent_invoice_amount"
          onChange={handleInputChange}
          value={values.custom_agent_invoice_amount}
        />
      </CCol>
      <CButtonToolbar className="mb-3">
        <CCol>
          <CButton
            style={{ marginBottom: "5px" }}
            type="submit"
            onClick={SubmitHandler}
          >
            next page
          </CButton>
        </CCol>
      </CButtonToolbar>
    </CForm>
  );
};
