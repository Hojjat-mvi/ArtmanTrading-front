import React from "react";
import { CCard, CCardBody, CCardHeader, CButton } from "@coreui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Show = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const transit = location.state.transit;

  return (
    <>
      <CButton
        onClick={() => {
          navigate("/pages/transit");
        }}
        style={{ marginBottom: "10px" }}

      >
        Back
      </CButton>
      <CCard>
        <CCardHeader>Details</CCardHeader>
        <CCardBody>
          <blockquote className="blockquote mb-0">
            <p>{transit.name}</p>
          </blockquote>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Show;
