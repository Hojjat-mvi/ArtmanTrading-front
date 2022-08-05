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


  const getOrders = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/buy-orders");
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
          <CTableRow key={agent.id}>
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
      <CTable borderless hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Agent ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody >{makeTableRow()}</CTableBody>
      </CTable>
    </>
  );
};

export default Tables;
