import React from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { useLocation } from "react-router-dom";

const Show = () => {
  const location = useLocation();

  const material = location.state.material;

  return (
    <CCard>
      <CCardHeader>Details</CCardHeader>
      <CCardBody>
        <blockquote className="blockquote mb-0">
          <p>{material.name}</p>
        </blockquote>
      </CCardBody>
    </CCard>
  );
};

export default Show;
