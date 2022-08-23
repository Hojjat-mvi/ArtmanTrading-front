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
  CFormCheck,
} from "@coreui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DeletionModal } from "../../components/DeletionModal";

const Tables = () => {
  const [orders, setOrders] = useState([]);

  const Navigate = useNavigate();

  const getOrders = async () => {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.get(
        `http://localhost:8000/api/buying-orders`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setOrders(result.data.data);
    } catch (e) {
      alert("error");
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
            <CTableDataCell scope="col" className="col-12">
              {" "}
              {order.id}
            </CTableDataCell>
            <CTableHeaderCell scope="col" className="d-grid gap-2 d-md-flex">
              {" "}
              <CButton
                color="success"
                onClick={() => {
                  Navigate("/pages/orders/Show", { state: { order } });
                }}
              >
                show
              </CButton>
              <CButton
                onClick={() => {
                  Navigate("/base/tables/Edit", { state: { order } });
                }}
              >
                edit
              </CButton>
              <DeletionModal
                resource={order.id}
                reRender={getOrders}
                url={"buying-orders"}
              />
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
              placeholder="Search Orders"
            />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
          <CCol md={12} className={"my-2"}>
            <CButton className={"col-12"} color="primary">
              Create New
            </CButton>
          </CCol>
        </CContainer>
      </CNavbar>
      {/*table intro*/}
      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Order ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>{makeTableRow()}</CTableBody>
      </CTable>
    </>
  );
};

export default Tables;
