import React from "react";
import { CCard, CCardBody, CCardHeader, CButton } from "@coreui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Show = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const agent = location.state.agent;

  return (
    <>
      <CButton
        onClick={() => {
          navigate("/pages/agents");
        }}
        style={{ marginBottom: "10px" }}
      >
        Back
      </CButton>
      <CCard>
        <CCardHeader>Details</CCardHeader>
        <CCardBody>
          <blockquote className="blockquote mb-0">
            <p>{agent.name}</p>
          </blockquote>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Show;
