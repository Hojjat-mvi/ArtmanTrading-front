import React from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { useLocation } from "react-router-dom";

const Show = () => {
  const location = useLocation();

  const transit = location.state.transit;

  return (
    <CCard>
      <CCardHeader>Details</CCardHeader>
      <CCardBody>
        <blockquote className="blockquote mb-0">
          <p>{transit.name}</p>
        </blockquote>
      </CCardBody>
    </CCard>
  );
};

export default Show;
