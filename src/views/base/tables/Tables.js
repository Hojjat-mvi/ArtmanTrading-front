import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CNavbar,
  CContainer,
  CNavbarBrand,
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";
import axios from "axios";

const Tables = () => {
  const [orders, setOrders] = useState([]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const getOrders = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/buy-orders");
      await sleep(5000);
      setOrders(result.data.data);
    } catch {
      alert("cant load information");
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const makeTableRow = () => {
    return (
      <>
        {orders.map((agent) => (
          <CTableRow>
            <CTableDataCell scope="col"> {agent.id}</CTableDataCell>
            <CTableHeaderCell scope="col">
              {" "}
              {agent.date_of_purchase}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">
              {" "}
              {agent.certificate_of_origin}
            </CTableHeaderCell>
          </CTableRow>
        ))}
      </>
    );
  };

  return (
    <>
      <CNavbar colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </CContainer>
      </CNavbar>
      {/*table intro*/}
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>{makeTableRow()}</CTableBody>
      </CTable>
    </>
  );
};

export default Tables;
