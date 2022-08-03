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

  const [orders,setOrders] = useState([])

  const getOrders = async () => {
    try {
      const {orders: result} = await axios.get("http://localhost:8000/api/buy-orders");
      setOrders(result)
      console.log(result)
      console.log(orders)
    } catch {
      alert("cant load information");
    }
    return result;
  };

  useEffect(() => {
    getOrders();
  }, []);


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
        <CTableBody>
          <CTableRow>
            {/* <CTableHeaderCell scope="row">Default</CTableHeaderCell>
            <CTableDataCell>Cell</CTableDataCell>
            <CTableDataCell>Cell</CTableDataCell> */}
            {/* <div>
              {result.map((agent) => {
                <CTableHeaderCell key={agent.id}> agent code : {agent.id}</CTableHeaderCell>;
              })}
            </div>
            <div>
              {result.map((agent) => {
                <CTableDataCell key={agent.id}>date : {agent.date_of_purchase}</CTableDataCell>
              })}
            </div> */}
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  );
};

export default Tables;
