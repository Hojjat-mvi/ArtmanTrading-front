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
import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { Edit } from "./Edit";

const Tables = () => {
  const [orders, setOrders] = useState([]);

  const Navigate = useNavigate();

  const getOrders = async () => {
    try {
      const result = await axios.get("http://localhost:8000/api/buying-orders");
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
        {orders.map((order) => (
          <CTableRow key={order.id}>
            <CTableDataCell scope="col"> {order.id}</CTableDataCell>
            <CTableHeaderCell scope="col">
              {" "}
              {order.date_of_purchase}
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className="d-grid gap-2 d-md-flex">
              {" "}
              <CButton
                onClick={() => {
                  
                  Navigate("/base/tables/Edit",{state:{order}});
                }}
              >
                edit
              </CButton>
              <Modal orderId={order.id} reRender={getOrders}/>
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
          <CNavbarBrand href="#">Orders</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput
              type="search"
              className="me-2"
              placeholder="Search your Order id"
            />
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
            <CTableHeaderCell scope="col">Order ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>{makeTableRow()}</CTableBody>
      </CTable>
    </>
  );
};

export default Tables;
