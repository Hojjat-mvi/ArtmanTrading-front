import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CButton } from "@coreui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Show = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const company = location.state.company;

  return (
    <>
      <CCol xs={12}>
        <CButton
          onClick={() => {
            navigate("/pages/companies");
          }}
          style={{ marginBottom: "10px" }}
        >
          Back
        </CButton>
      </CCol>
      <CCard>
        <CCardHeader>Details</CCardHeader>
        <CCardBody>
          <blockquote className="blockquote mb-0">
            <p>{company.name}</p>
          </blockquote>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Show;
